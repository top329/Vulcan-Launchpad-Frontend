"use client";
import React from "react";
import Header from "@/components/dashboard/header";
import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "@/components/dashboard/create/atoms/infoInput";
import Datepicker from "@/components/dashboard/create/atoms/datePicker";
import Description from "@/components/dashboard/create/atoms/descriptionInput";
import Image from "next/image";
import { useAtom } from "jotai";
import Uploader from "@/components/dashboard/create/atoms/dragFileUploader";

import {
  titleAtom,
  hardCapAtom,
  softCapAtom,
  youtubeLinkAtom,
  tokenPriceAtom,
  endTimeAtom,
  descriptionAtom,
  walletAtom,
  checkedAtom,
} from "@/store";

const Create = () => {
  const [title, setTitle] = useAtom(titleAtom);
  const [hardCap, setHardCap] = useAtom(hardCapAtom);
  const [softCap, setSoftCap] = useAtom(softCapAtom);
  const [youtubeLink, setYoutubeLink] = useAtom(youtubeLinkAtom);
  const [tokenPrice, setTokenPrice] = useAtom(tokenPriceAtom);
  const [endTime, setEndTime] = useAtom(endTimeAtom);
  const [description, setDescription] = useAtom(descriptionAtom);
  const [wallet, setWallet] = useAtom(walletAtom);
  const [checked, setChecked] = useAtom(checkedAtom);


  const handleChangeEndTime = (date: Date) => {
    setEndTime(date.toLocaleDateString());
  };

  const readImage = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement & {
      files: FileList;
    }

    console.log(target.files[0]);
    // const reader = new window.FileReader()
    // reader.readAsArrayBuffer(file)
    // reader.onloadend = () => {
    //     setType(file.type);
    //     setBuffer(Buffer(reader.result));
    // }
}

  return (
    <div className="text-[#23262F] dark:text-[#CCCCCC] text-[15px] grow">
      <h3 className="font-bold">Upload File</h3>
      <h5 className="text-[#777E90] text-xs py-1">
        Drag or choose your file to upload
      </h5>

      {/* <label
        htmlFor="project-logo"
        id="upload"
        className="bg-[#F0F8FF] dark:bg-[#020111] border-2 border-[#98bdea17] py-16 rounded-2xl mt-3 flex justify-center items-center"
      >
        <div className="flex flex-col gap-3 cursor-pointer hover:opacity-60 items-center">
          <Icon icon="line-md:cloud-upload-outline-loop" width={30} />
          <p className="dark:text-[#777E90] text-[#777E90] text-xs text-center">
            PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
          </p>
        </div>
      </label> */}
      <Uploader/>

      {/* <input onChange={readImage} id="project-logo" type="file" className="hidden" accept="image/png, image/gif, image/jpeg"/> */}

      <div
        id="information"
        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8"
      >
        <Input
          title="Project Title"
          placeholder="Enter your project title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <Input
          title="Amount To Rise"
          placeholder="Enter your amount to rise"
          value={hardCap}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHardCap(e.target.value)
          }
        />
        <Input
          title="Softcap Amount"
          placeholder="Enter your softcap amount"
          value={softCap}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSoftCap(e.target.value)
          }
        />
        <Input
          title="Video Link"
          placeholder="Enter your Youtube link"
          value={youtubeLink}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setYoutubeLink(e.target.value)
          }
        />
        <Input
          title="Token Price"
          placeholder="Enter your token price"
          value={tokenPrice}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTokenPrice(e.target.value)
          }
        />
        <Datepicker
          title="End Time"
          placeholder="Enter your ICO end time"
          value={endTime}
          onChange={handleChangeEndTime}
        />
      </div>

      <Input
        title="Wallet Address"
        className="mt-10"
        placeholder="Enter wallet address that sale proceeds will go to"
        value={wallet}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWallet(e.target.value)
        }
      />

      <Description
        title="Description"
        className="mt-10"
        placeholder="Enter your token's description..."
        value={description}
        onChange={(value: string) => setDescription(value)}
      />

      <div className="py-4 flex gap-4">
        <div className="flex gap-2 items-center">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
            checked={checked}
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-5 h-5 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded dark:border-gray-600"
          />
          <span>Yes</span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            checked={!checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChecked(!e.target.checked)
            }
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-5 h-5 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded dark:border-gray-600"
          />
          <span>No</span>
        </div>
      </div>

      <button className="py-2 text-white rounded-lg mt-3 hover:bg-blue-700 transition-all hover:ring-1 hover:ring-white hover bg-blue-500 text-sm font-bold px-4">
        Save
      </button>
    </div>
  );
};

export default Create;