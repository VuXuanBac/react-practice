export interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  coverUrl: string;
  timestamp: Date;
  reactions: {
    love: number;
    dislike: number;
    haha: number;
    sad: number;
    angry: number;
    disgust: number;
  };
}

export default [
  {
    id: 1,
    title: "JAVASCRIPT",
    body: `JavaScript is the world most popular
  lightweight, interpreted compiled programming
  language. It is also known as scripting
  language for web pages. It is well-known for
  the development of web pages, many non-browser
  environments also use it. JavaScript can be
  used for Client-side developments as well as
  Server-side developments`,
    author: "Nishant Singh ",
    timestamp: new Date("2024-06-10T14:30:00Z"),
    coverUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    reactions: {
      love: 45,
      dislike: 12,
      haha: 38,
      sad: 0,
      angry: 0,
      disgust: 3,
    },
  },
  {
    id: 2,
    title: "Data Structure ",
    body: `There are many real-life examples of
  a stack. Consider an example of plates stacked
  over one another in the canteen. The plate
  which is at the top is the first one to be
  removed, i.e. the plate which has been placed
  at the bottommost position remains in the
  stack for the longest period of time. So, it
  can be simply seen to follow LIFO(Last In
  First Out)/FILO(First In Last Out) order.`,
    author: "Suresh Kr",
    timestamp: new Date("2024-12-05T10:23:08Z"),
    coverUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    reactions: {
      love: 7,
      dislike: 0,
      haha: 380,
      sad: 10,
      angry: 10,
      disgust: 1,
    },
  },
  {
    id: 3,
    title: "Algorithm",
    body: `The word Algorithm means “a process
  or set of rules to be followed in calculations
  or other problem-solving operations”. Therefore
  Algorithm refers to a set of rules/instructions
  that step-by-step define how a work is to be
  executed upon in order to get the expected
  results. `,
    author: "Monu Kr",
    timestamp: new Date("2024-11-08T04:13:00Z"),
    coverUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    reactions: {
      love: 12,
      dislike: 12,
      haha: 1,
      sad: 125,
      angry: 5,
      disgust: 23,
    },
  },
  {
    id: 4,
    title: "Computer Network",
    body: `An interconnection of multiple devices,
  also known as hosts, that are connected using
  multiple paths for the purpose of sending/
  receiving data media. Computer networks can
  also include multiple devices/mediums which
  help in the communication between two different
  devices; these are known as Network devices
  and include things such as routers, switches,
  hubs, and bridges. `,
    author: "Sonu Kr",
    timestamp: new Date("2024-10-24T01:15:35Z"),
    coverUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    reactions: {
      love: 85,
      dislike: 43,
      haha: 38,
      sad: 12,
      angry: 8,
      disgust: 100,
    },
  },
] as readonly Post[];
