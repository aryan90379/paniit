export const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

export interface CommitteeMember {
  name: string;
  role: string;
  category: 'Core Committee' | 'Office Bearers' | 'Advisors' | 'Organising Committee';
  image: string;
}

export const OFFICE_BEARERS: CommitteeMember[] = [
  { 
    name: 'Prabhat Kumar, IRS', 
    role: 'Chairman', 
    category: 'Office Bearers',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/prabhat%20kumar%20.jpg',
  },
  { 
    name: 'Dr. Amitabh Ranjan', 
    role: 'Vice Chairman', 
    category: 'Office Bearers',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Amitabh%20Ranjan.jpg',
  },
  { 
    name: 'Rajeev Singh', 
    role: 'General Secretary', 
    category: 'Office Bearers',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_20.png',
  },
  { 
    name: 'Ashish Kela', 
    role: 'Treasurer', 
    category: 'Office Bearers',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/ashish%20kela.jpeg',
  },
];

export const ADVISORS: CommitteeMember[] = [
  { 
    name: 'Prof. V. Kamakoti', 
    role: 'Director, IIT Madras', 
    category: 'Advisors',
    image: "https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg",
  },
  { 
    name: 'Dr. K. N. Satyanarayana', 
    role: 'Director, IIT Tirupati', 
    category: 'Advisors',
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg',
  },
  { 
    name: 'Prof. Mahesh Panchagnula', 
    role: 'Ex Dean, IIT Madras', 
    category: 'Advisors',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/mahesh%20panchagnula.jpeg',
  },
];

export const CORE_COMMITTEE: CommitteeMember[] = [
  { 
    name: 'Swadeep Pillarisetti', 
    role: 'Summit Chair', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_6.png',
  },
  { 
    name: 'Rajesh Kumar Dasari', 
    role: 'Summit Co-Chair', 
    category: 'Core Committee',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/Rajesh%20Kumar%20Dasari.jpeg',
  },
  { 
    name: 'Sudhakar Gande', 
    role: 'Summit Co-Chair', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_16.jpg',
  },
  { 
    name: 'M S Reddy', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_15.png',
  },
  { 
    name: 'Dr. Ramunaidu Randhi', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/Dr.%20Ramunaidu%20Randhi',
  },
  { 
    name: 'Dr. Gundala Nagaraju', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Gundala%20Nagaraju%20(right).jpg',
  },
];

export const CORE_COMMITTEE_MEMBERS = CORE_COMMITTEE.slice(2);

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  { 
    name: 'Neeraj Kumar', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_5.png',
  },
  { 
    name: 'Praveen Kumar', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_4.png',
  },
  { 
    name: 'Abhilash Kondai', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Abhilash%20Kondai.jpg',
  },
  { 
    name: 'J V Prem Kumar Reddy', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/J%20V%20Prem%20Kumar%20Reddy.jpeg',
  },
  { 
    name: 'NS Bhanuprakash', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/NS%20Bhanuprakash.jpg',
  },
  { 
    name: 'Pradip Sasmal', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Pradip%20Sasmal.jpg',
  },
  { 
    name: 'Prof. Murali Krishna Iyyanki', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Prof.%20Murali%20Krishna%20%20Iyyanki%20(left).jpg',
  },
  { 
    name: 'Rajesh Rathi', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Rajesh%20Rathi.jpg',
  },
  { 
    name: 'Phani Arega', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Phani%20Arega.jpg',
  },
  { 
    name: 'Sai Teja Duggempudi', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sai%20Teja%20Duggempudi.jpg',
  },
  { 
    name: 'Tejavath Jagadeesh', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/Tejavath%20Jagadeesh.jpeg',
  },
  { 
    name: 'Dr. Anjanna Matta', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Anjanna%20Matta.jpeg',
  },
  { 
    name: 'C P Madhusudan', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/C%20P%20Madhusudan_.jpg',
  },
  { 
    name: 'Thejaswini Kalasamudram', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Thejaswini%20Kalasamudram.jpeg',
  },
  { 
    name: 'Akhil Sai Ram Gadi', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Gadi%20Akhil%20Sai%20Ram.jpg',
  },
  { 
    name: 'Kshitij Tiwari', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_2567/kshitij.jpg',
  },
  { 
    name: 'Sanskreeti Raj', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sanskreeti%20Raj.jpg',
  },
  { 
    name: 'Vishakh Agarwal', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/Vishakh%20Agarwal.jpeg',
  },
  { 
    name: 'Vishal Bhandari', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://d3liyurciwi0wb.cloudfront.net/organising%20commitee/Vishal%20Bhandari.jpeg',
  },
];

export const ALL_COMMITTEE_MEMBERS: CommitteeMember[] = [
  ...CORE_COMMITTEE,
  ...OFFICE_BEARERS,
  ...ADVISORS,
  ...COMMITTEE_MEMBERS,
];

