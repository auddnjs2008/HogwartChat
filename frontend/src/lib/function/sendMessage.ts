import { RefObject } from "react";
import imageUrls from "../images";

const sendMessage = (
  text: string,
  name: string,
  dormitory: string,
  box: RefObject<HTMLUListElement>
) => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  const li = document.createElement("li");

  const profile = document.createElement("img");
  profile.src = imageUrls.badge[dormitory];

  const info = document.createElement("div");

  const subInfo = document.createElement("div");

  const nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.innerText = name;
  const dateSpan = document.createElement("span");
  dateSpan.innerText = `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  }`;
  dateSpan.className = "date";
  subInfo.append(nameSpan, dateSpan);

  const textInfo = document.createElement("div");
  textInfo.className = "message";
  textInfo.innerText = text;

  info.append(subInfo, textInfo);

  li.append(profile, info);
  box.current?.append(li);
};

export default sendMessage;
