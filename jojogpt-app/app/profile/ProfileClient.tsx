'use client';
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/Input";
import ImageUpload from "../components/inputs/ImageUpload";
import Image from "next/image";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Avatar from "../components/Avatar";


interface ProfileClientProps {
  currentUser: SafeUser | null;
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  currentUser
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
    setValue,
    watch
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      imageSrc: '',
    }
  })

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const name = watch('name');
  const imageSrc = watch('imageSrc');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.patch(`/api/profile/${currentUser?.id}`, data)
      .then((response) => {
        router.refresh();
        toast.success('Profile updated!')
        reset();
        setCustomValue('name', response.data.name);
      })
      .catch((err) => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <Container>
      <Heading
        title="Profile"
        subtitle="Edit your profile information."
      />
      <div className="min-w-[300px] max-w-[800px]">

        <div className="py-4 grid grid-cols-1 sm:grid-cols-[150px_1fr] grid-rows-[50px_100px_50px_1fr] sm:grid-rows-[100px_1fr] gap-4 ">
          <div className="font-bold text-lg">Name</div>
          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <div className="font-bold text-lg">
            Profile Picture
          </div>
          <div className="flex flex-col sm:flex-row gap-10 items-center justify-start">
            <div className="flex-grow flex flex-row items-center justify-center h-full">
              <div className={`h-[225px] w-[225px] relative`}>
                <Image
                  src={currentUser?.image || '/images/placeholder.jpeg'}
                  alt="Profile Picture"
                  className={`rounded-full`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <ImageUpload
              value={imageSrc}
              onChange={(value) => setCustomValue('imageSrc', value)}
            />
          </div>
        </div>
        <Button
          disabled={isLoading}
          label="Update"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </Container>
  )
};

export default ProfileClient;