import { Comment } from "../data/comments";
import { Reactions } from "../data/reactions";
export interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  coverUrl: string;
  timestamp: Date;
  reactions: Reactions;
  comments: Comment[];
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
    comments: [
      {
        id: 7654,
        level: 1,
        content:
          "JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages",
        author: "Who is who",
        timestamp: new Date("2024-10-24T04:15:35Z"),
        reactions: { haha: 12, love: 5, dislike: 8 },
        subcomments: [] as Comment[],
      },
      {
        id: 9345,
        level: 1,
        content:
          "Trong thế giới JavaScript, npm, yarn và pnpm là ba trình quản lý gói phổ biến nhất. Chúng giúp các nhà phát triển tự động hóa quá trình xuất bản, cài đặt, nâng cấp, và gỡ bỏ các phần mềm. Mặc dù có những đối thủ mới xuất hiện trong những năm gần đây như bun và deno, nhưng lập trình viên vẫn sử dụng ba trình quản lý gói này nhiều.",
        author: "Shinichi Kudo",
        timestamp: new Date("2024-10-24T06:15:35Z"),
        reactions: {},
        subcomments: [
          {
            id: 2346,
            level: 2,
            content:
              "nếu mà pj nhỏ thì npm là ok rùi nhỉ, nhma cho em hỏi thường pj lớn thì họ xài j ạ",
            author: "Ngô Tấn Thanh",
            timestamp: new Date("2024-10-24T07:15:35Z"),
            reactions: { sad: 432 },
            subcomments: [
              {
                id: 2347,
                level: 3,
                content: "vẫn là npm thôi em. <script>alert('xss')</script>",
                author: "Người tham gia ẩn danh 582",
                timestamp: new Date("2024-10-24T08:15:35Z"),
                reactions: { angry: 1231 },
                subcomments: [
                  {
                    id: 2348,
                    level: 4,
                    content: `For counts of emoji, see Emoji Counts.

                    While these charts use a particular version of the Unicode Emoji data files, the images and format may be updated at any time. For any production usage, consult those data files. For information about the contents of each column, such as the CLDR Short Name, click on the column header. For further information, see Index & Help.
                    `,
                    author: "Ngô Tấn Thanh",
                    timestamp: new Date("2024-10-24T09:15:35Z"),
                    reactions: {
                      angry: 124234,
                      sad: 2342,
                      haha: 10,
                    },
                    subcomments: [
                      {
                        id: 7424,
                        level: 5,
                        content:
                          "This chart provides a list of the Unicode emoji characters and sequences, with images from different vendors, CLDR name, date, source, and keywords. The ordering of the emoji and the annotations are based on Unicode CLDR data. Emoji sequences have more than one code point in the Code column",
                        author: "Người tham gia ẩn danh 582",
                        timestamp: new Date("2024-10-24T09:17:35Z"),
                        reactions: {
                          angry: 124234,
                          sad: 2342,
                          haha: 10,
                        },
                        subcomments: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ] as Comment[],
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
    comments: [
      {
        id: 2143,
        level: 1,
        content: "Excellent! 😀",
        author: "Trung Hieu",
        timestamp: new Date("2024-12-06T06:23:08Z"),
        reactions: {},
        subcomments: [
          {
            id: 1131,
            level: 2,
            content: `Đã xài Bun được nửa năm nay.`,
            author: "Nguyễn Hồng Quân",
            timestamp: new Date("2024-12-06T10:23:08Z"),
            reactions: { haha: 15 },
            subcomments: [],
          },
        ],
      },
    ],
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
    comments: [],
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
    comments: [
      {
        id: 1234,
        level: 1,
        content: "Excellent! 😀",
        author: "Shinichi Kudo",
        timestamp: new Date("2024-06-10T14:40:30Z"),
        reactions: {},
        subcomments: [],
      },
      {
        id: 1413,
        level: 1,
        content: `npm h cũng nhanh k kém yarn nhờ sp tính năng parallel download từ phiên bản 7 rồi bạn
        npm set maxsockets 50`,
        author: "Cánh Buồm Phiêu Du",
        timestamp: new Date("2024-06-10T16:10:30Z"),
        reactions: { haha: 15 },
        subcomments: [],
      },
    ],
  },
] as readonly Post[];
