type badge = {
  [key: string]: string;
  gryffindor: string;
  slytherin: string;
  hufflepuff: string;
  ravenclaw: string;
};

type images = {
  badge: badge;
};

const imageUrls: images = {
  badge: {
    gryffindor:
      "https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%EA%B7%B8%EB%A6%AC%ED%95%80%EB%8F%84%EB%A5%B4.png",
    slytherin:
      "https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%EC%8A%AC%EB%A6%AC%EB%8D%B0%EB%A6%B0.png",
    hufflepuff:
      "https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%ED%9B%84%ED%92%80%ED%91%B8%ED%94%84.png",
    ravenclaw:
      "https://hogwartchat.s3.ap-northeast-2.amazonaws.com/%EB%9E%98%EB%B2%88%ED%81%B4%EB%A3%A8.png",
  },
};

export default imageUrls;
