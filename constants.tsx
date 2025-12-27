
import { BlogPost, UserProfile, Project, Skill, Certificate } from './types';

export const PROFILE: UserProfile = {
  name: "Võ Nguyên Bình",
  role: "Fullstack Engineer & Network Enthusiast",
  bio: "Chào mừng bạn đến với blog cá nhân của mình! Mình là sinh viên Công nghệ Thông tin vừa tốt nghiệp, có định hướng phát triển trong lĩnh vực lập trình phần mềm , phát triển ứng dụng web và lập trình mạng.... Blog này là nơi mình chia sẻ những kiến thức tích lũy được trong quá trình học tập và làm việc với Java, JavaScript và các giao thức mạng.",
  avatar: "/333.jpg",
  education: {
    school: "Hutech University - Đại học Công nghệ TP.HCM",
    major: "Công nghệ phần mềm",
    period: "2022 - 2026"
  },
  socials: {
    github: "https://github.com/HyperOnlyTop",
    linkedin: "https://linkedin.com/in/vonguyenbinh",
    facebook: "https://www.facebook.com/nguyen.binh.525537",
    instagram: "https://www.instagram.com/binhnguyen3840/",
    email: "bnhb648@gmail.com",
    phone: "+84 0818687047"
  }
};

export const SKILLS: Skill[] = [
  { name: "Java", level: 3.5, category: "Language" },
  { name: "JavaScript", level: 5, category: "Language" },
  { name: "TypeScript", level: 4, category: "Language" },
  { name: "Python", level: 4, category: "Language" },
  { name: "Flutter", level: 4, category: "Framework" },
  { name: "Node.js", level: 4, category: "Framework" },
  { name: "React", level: 4, category: "Framework" },
  { name: "Next.js", level: 4, category: "Framework" },
  { name: "TCP/IP & UDP", level: 3, category: "Network" },
  { name: "WebSockets", level: 3, category: "Network" },
  { name: "Docker", level: 3, category: "Tool" },
  { name: "Jira", level: 4, category: "Tool" },
  { name: "Git", level: 4, category: "Tool" },
  { name: "MongoDB", level: 3, category: "Tool" }
];

export const CERTIFICATES: Certificate[] = [
  { 
    title: "JavaScript Essentials 2", 
    issuer: "Cisco Networking Academy", 
    date: "Dec 08, 2025",
    imageUrl: "/certs/js_essentials_2.svg",
    fullImageUrl: "/certs/js_essentials_2_full.png",
    fullPdfUrl: "/certs/2.pdf"
  },
  { 
    title: "JavaScript Essentials 1", 
    issuer: "Cisco Networking Academy", 
    date: "Dec 10, 2025",
    imageUrl: "/certs/js_essentials_1.svg",
    fullImageUrl: "/certs/js_essentials_1_full.png",
    fullPdfUrl: "/certs/1.pdf"
  },
  { 
    title: "Networking Basics", 
    issuer: "Cisco Networking Academy", 
    date: "Dec 19, 2025",
    imageUrl: "/certs/networking_basics.svg",
    fullImageUrl: "/certs/networking_basics_full.png",
    fullPdfUrl: "/certs/0.pdf"
  },
  { 
    title: "Introduction to Cybersecurity", 
    issuer: "Cisco Networking Academy", 
    date: "Dec 20, 2025",
    imageUrl: "/certs/introduction_cybersecurity.svg",
    fullImageUrl: "/certs/introduction_cybersecurity_full.png",
    fullPdfUrl: "/certs/23.pdf"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Hệ thống thu gom pin cũ Pin Swap",
    description: "Pin Swap là hệ thống web cho phép người dùng thu gom pin (pin cũ), ghi nhận ảnh/địa điểm, trao đổi điểm lấy voucher, và quản lý bởi admin/doanh nghiệp.",
    language: " Frontend (React) và backend (Node.js + Express + MongoDB).",
    stars: 12,
    forks: 5,
    url: "https://github.com/HyperOnlyTop/PinSwap",
    updatedAt: "2025-12-10"
  },
  {
    id: "p2",
    name: "Web xem phim, riview phim ",
    description: "Web xem phim là nền tảng giải trí trực tuyến, cung cấp kho phim đa dạng từ phim lẻ, phim bộ đến anime và phim chiếu rạp. Người dùng có thể tìm kiếm, xem phim theo thể loại, năm phát hành và đánh giá nội dung một cách nhanh chóng, tiện lợi trên nhiều thiết bị.",
    language: " Fontend (Javascript), backend (Node.js, Express, SQL Server)",
    stars: 24,
    forks: 8,
    url: "https://github.com/HyperOnlyTop/DACS",
    updatedAt: "2025-12-10"
  },
  {
    id: "p3",
    name: "Ứng dụng quản lý học sinh, tích hợp điểm danh bằng khuôn mặt,văn tay,...",
    description: "Ứng dụng quản lý học sinh là hệ thống hỗ trợ nhà trường trong việc quản lý thông tin học sinh, lớp học và kết quả học tập. Ứng dụng tích hợp các công nghệ điểm danh thông minh như nhận diện khuôn mặt và vân tay, giúp tự động hóa quá trình điểm danh, giảm sai sót và tiết kiệm thời gian cho giáo viên.",
    language: "Fontend (Dart - Flutter), backend (Node.js, Express, Sql Server)",
    stars: 45,
    forks: 12,
    url: "https://github.com/HyperOnlyTop/StudentDashboard",
    updatedAt: "2025-12-10"
  },
  {
    id: "p4",
    name: "mini-http-server-from-scratch",
    description: "Xây dựng một HTTP server đơn giản từ con số 0 chỉ sử dụng Java Standard Library để hiểu RFC 2616.",
    language: "Java",
    stars: 18,
    forks: 3,
    url: "https://github.com",
    updatedAt: "2024-10-15"
  }
];

export const BLOG_POSTS: BlogPost[] = [

/* ======================= BÀI 1 ======================= */
{
  id: "1",
  title: "Tổng quan Lập trình Mạng với Java – Kiến thức nền tảng cho Backend Developer",
  excerpt: "Bài viết cung cấp cái nhìn toàn diện về lập trình mạng trong Java, từ kiến thức nền đến ứng dụng thực tế.",
  content: `
## 1. Giới thiệu
Lập trình mạng là lĩnh vực nghiên cứu và phát triển các ứng dụng có khả năng giao tiếp với nhau thông qua mạng máy tính. Trong bối cảnh hiện đại, hầu hết các hệ thống phần mềm đều hoạt động trên môi trường mạng như web, cloud, microservices và IoT.

Java là một trong những ngôn ngữ được sử dụng rộng rãi nhất trong lập trình mạng nhờ tính độc lập nền tảng, khả năng xử lý đa luồng mạnh mẽ và hệ sinh thái phong phú.

## 2. Kiến thức nền tảng mạng máy tính
Một hệ thống mạng bao gồm:
- Client
- Server
- Giao thức truyền thông (TCP, UDP, HTTP)

TCP đảm bảo dữ liệu chính xác và đầy đủ, trong khi UDP ưu tiên tốc độ.

## 3. Java và lập trình mạng
Java cung cấp gói \`java.net\` với các lớp như:
- InetAddress
- Socket, ServerSocket
- URL, URLConnection

## 4. Mô hình Client – Server
Client gửi request, server xử lý và trả response. Đây là kiến trúc cốt lõi của backend hiện đại.

## 5. Ví dụ minh họa
\`\`\`java
InetAddress address = InetAddress.getLocalHost();
System.out.println(address.getHostAddress());
\`\`\`

## 6. Ứng dụng thực tế
- Backend Web
- Server Game
- Chat Application
- IoT

## 7. Tổng kết
Bài viết giúp người học nắm nền tảng quan trọng để tiếp cận các chủ đề nâng cao như Socket, REST API và bảo mật.
`,
  category: "Java",
  date: "2024-12-01",
  author: "Admin",
  readTime: "20 phút",
  imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
},

/* ======================= BÀI 2 ======================= */
{
  id: "2",
  title: "Socket Programming trong Java – TCP Client & Server",
  excerpt: "Phân tích chi tiết Socket Programming và cách xây dựng TCP Server trong Java.",
  content: `
## 1. Giới thiệu
Socket Programming là nền tảng của lập trình mạng cấp thấp, cho phép các tiến trình giao tiếp trực tiếp qua mạng.

## 2. Khái niệm Socket
Socket được xác định bởi IP, Port và Protocol.

## 3. TCP và Three-way Handshake
TCP thiết lập kết nối thông qua SYN → SYN-ACK → ACK.

## 4. Kiến trúc TCP Client – Server
Mỗi client kết nối đến server thông qua một socket riêng biệt.

## 5. TCP Server cơ bản
\`\`\`java
ServerSocket server = new ServerSocket(8080);
Socket client = server.accept();
\`\`\`

## 6. Gửi và nhận dữ liệu
Sử dụng InputStream và OutputStream để truyền dữ liệu.

## 7. Vấn đề thực tế
Server đơn luồng không xử lý được nhiều client.

## 8. Hướng cải tiến
Áp dụng đa luồng hoặc Thread Pool.

## 9. Ứng dụng thực tế
Chat server, game server, FTP server.

## 10. Tổng kết
Socket Programming giúp lập trình viên hiểu sâu cơ chế giao tiếp mạng.
`,
  category: "Java",
  date: "2024-12-05",
  author: "Admin",
  readTime: "25 phút",
  imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"

},

/* ======================= BÀI 3 ======================= */
{
  id: "3",
  title: "Fetch API & Bất đồng bộ trong JavaScript",
  excerpt: "Giải thích cơ chế bất đồng bộ, Promise và Async/Await trong JavaScript.",
  content: `
## 1. Giới thiệu
JavaScript là ngôn ngữ bất đồng bộ theo thiết kế.

## 2. Event Loop
Event Loop giúp JS xử lý nhiều tác vụ mà không chặn UI.

## 3. Promise
Promise đại diện cho một tác vụ bất đồng bộ.

## 4. Async/Await
Cú pháp giúp code dễ đọc hơn.

\`\`\`js
const res = await fetch("/api/data");
\`\`\`

## 5. Fetch API
Chuẩn hiện đại thay thế XMLHttpRequest.

## 6. Xử lý lỗi
Sử dụng try/catch để bắt lỗi network.

## 7. Ứng dụng thực tế
Gọi REST API, load dữ liệu động.

## 8. Tổng kết
Hiểu bất đồng bộ giúp xây dựng web mượt mà và hiệu quả.
`,
  category: "JavaScript",
  date: "2024-12-08",
  author: "Admin",
  readTime: "18 phút",
  imageUrl: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
},

/* ======================= BÀI 4 ======================= */
{
  id: "4",
  title: "WebSocket & Socket.io – Giao tiếp thời gian thực",
  excerpt: "Xây dựng hệ thống real-time với WebSocket và Node.js.",
  content: `
## 1. Giới thiệu
WebSocket cho phép kết nối hai chiều liên tục.

## 2. So sánh WebSocket và HTTP
HTTP là stateless, WebSocket là persistent.

## 3. Kiến trúc WebSocket
Client và server giữ kết nối mở.

## 4. Socket.io
Thư viện hỗ trợ fallback và room.

## 5. Ứng dụng thực tế
Chat, game online, notification.

## 6. Tổng kết
WebSocket là nền tảng của các ứng dụng real-time hiện đại.
`,
  category: "JavaScript",
  date: "2024-12-10",
  author: "Admin",
  readTime: "16 phút",
  imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"

},

/* ======================= BÀI 5 ======================= */
{
  id: "5",
  title: "Java 11 HttpClient – Giao tiếp HTTP hiện đại",
  excerpt: "Sử dụng HttpClient để gọi API và xử lý HTTP trong Java.",
  content: `
## 1. Giới thiệu
HttpClient ra mắt từ Java 11.

## 2. Ưu điểm
Hỗ trợ HTTP/2, async, WebSocket.

## 3. Ví dụ GET request
\`\`\`java
HttpClient client = HttpClient.newHttpClient();
\`\`\`

## 4. Ứng dụng
Gọi REST API, microservices.

## 5. Tổng kết
HttpClient giúp code Java sạch và hiện đại hơn.
`,
  category: "Java",
  date: "2024-12-12",
  author: "Admin",
  readTime: "15 phút",
 imageUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"

},

/* ======================= BÀI 6 ======================= */
{
  id: "6",
  title: "Multithreading & Thread Pool trong Server Java",
  excerpt: "Tối ưu hiệu suất server với ExecutorService.",
  content: `
## 1. Giới thiệu
Server cần xử lý nhiều request đồng thời.

## 2. Thread và vấn đề hiệu năng
Tạo quá nhiều thread gây tốn tài nguyên.

## 3. Thread Pool
Giải pháp tái sử dụng thread.

## 4. ExecutorService
API chuẩn của Java cho đa luồng.

## 5. Ứng dụng
Server backend, xử lý song song.

## 6. Tổng kết
Đa luồng là chìa khóa cho server hiệu suất cao.
`,
  category: "Java",
  date: "2024-12-15",
  author: "Admin",
  readTime: "20 phút",
  imageUrl: "https://images.unsplash.com/photo-1537432376769-00a5c8a4e89c"
},

/* ======================= BÀI 7 ======================= */
{
  id: "7",
  title: "SSL/TLS – Bảo mật truyền thông mạng",
  excerpt: "Tìm hiểu HTTPS, chứng chỉ số và TLS trong Java.",
  content: `
## 1. Giới thiệu
Bảo mật dữ liệu là yêu cầu bắt buộc.

## 2. SSL/TLS là gì
Mã hóa và xác thực dữ liệu.

## 3. Handshake TLS
Xác thực và trao đổi khóa.

## 4. Java và JSSE
Java hỗ trợ TLS thông qua JSSE.

## 5. Tổng kết
TLS giúp bảo vệ hệ thống khỏi tấn công MITM.
`,
  category: "Network",
  date: "2024-12-18",
  author: "Admin",
  readTime: "17 phút",
  imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
},

/* ======================= BÀI 8 ======================= */
{
  id: "8",
  title: "JSON & Serialization giữa Java và JavaScript",
  excerpt: "Chuẩn hóa dữ liệu trao đổi giữa frontend và backend.",
  content: `
## 1. Giới thiệu
JSON là định dạng trao đổi dữ liệu phổ biến nhất.

## 2. Serialization
Chuyển object thành JSON.

## 3. Jackson trong Java
Thư viện phổ biến để xử lý JSON.

## 4. JavaScript và JSON
JSON.stringify và JSON.parse.

## 5. Tổng kết
Serialization giúp API dễ mở rộng và bảo trì.
`,
  category: "Network",
  date: "2024-12-20",
  author: "Admin",
  readTime: "15 phút",
  imageUrl: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481"

},

/* ======================= BÀI 9 ======================= */
{
  id: "9",
  title: "Xây dựng REST API chuẩn với Spring Boot",
  excerpt: "Thiết kế và triển khai REST API theo chuẩn công nghiệp.",
  content: `
## 1. Giới thiệu
REST là kiến trúc phổ biến trong backend hiện đại.

## 2. Nguyên lý REST
Stateless, Resource-based.

## 3. Spring Boot
Framework mạnh mẽ cho Java backend.

## 4. Controller – Service – Repository
Kiến trúc phân lớp rõ ràng.

## 5. Ứng dụng thực tế
Hệ thống quản lý user, sản phẩm.

## 6. Tổng kết
Spring Boot giúp phát triển backend nhanh và ổn định.
`,
  category: "Java",
  date: "2024-12-22",
  author: "Admin",
  readTime: "25 phút",
 imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"

}

];
