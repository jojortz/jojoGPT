'use client';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { useCallback, useEffect, useState } from 'react';
import SortMenuItem from './SortMenuItem';
import { AiOutlineHistory, AiOutlineLike } from 'react-icons/ai';
import {TiStarburstOutline} from 'react-icons/ti';
import {BiTrendingUp} from 'react-icons/bi';
import { IconType } from 'react-icons';
import useConversationPosts from '@/app/hooks/useConversationPosts';
import { SafePost } from '@/app/types';

enum SortTypes {
  Newest = 'Newest',
  Top =  'Top',
  Oldest =  'Oldest'
}

const SortMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(SortTypes.Newest);
  const {posts, setPosts} = useConversationPosts();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])

  const getSortIcon = (sortType: string) => {
    switch(sortType) {
      case 'Top':
        return AiOutlineLike;
      case 'Oldest':
        return AiOutlineHistory;
      default:
        return TiStarburstOutline;
    }
  }

  const getSortIconNode = ({icon: Icon} :  {icon: IconType}) => {
    return <Icon/>
  }

  const topSort = (a: SafePost, b: SafePost) => {
    if (a.likeIds.length < b.likeIds.length) {
      return 1;
    }
    if (a.likeIds.length > b.likeIds.length) {
      return -1;
    }
    return newestSort(a,b);
  }
  const oldestSort = (a: SafePost, b: SafePost) => {
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  const newestSort = (a: SafePost, b: SafePost) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  useEffect(() => {
    let currentPosts = posts.slice();
    if (sort === SortTypes.Top) {
      currentPosts.sort(topSort);
    } else if (sort === SortTypes.Oldest) {
      currentPosts.sort(oldestSort);
    } else if (sort === SortTypes.Newest) {
      currentPosts.sort(newestSort);
    }
    setPosts(currentPosts);
  }, [sort]);



  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            toggleOpen();
          }}
          className="
            px-3
            py-1
            border-[1px]
            border-neutral-200
            flex
            flex-row
            font-semibold
            items-center
            justify-between
            rounded-full
            cursor-pointer
            cover:shadow-md
            transition
            w-[135px]
            text-neutral-800/70
          "
        >
          <div className="
            flex
            flex-row
            items-center
            justify-start
            gap-2
          ">
            {getSortIconNode({icon: getSortIcon(sort)})}
            {sort}
          </div>
          <RiArrowDropDownLine size={28} />
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40-vw]
            md:w-[150px]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            z-10
          "
        >
          <div className="flex flex-col cursor-pointer">
            {
              Object.values(SortTypes).map((sortType) =>
              <div key={sortType}>
              {sort !== sortType &&
                <SortMenuItem onClick={() => {
                  setSort(sortType);
                  toggleOpen();
                }}
                label={sortType}
                icon={getSortIcon(sortType)}
                />
              }
              </div>
              )
            }
          </div>
        </div>
      )
      }
    </div >
  )
};

export default SortMenu;