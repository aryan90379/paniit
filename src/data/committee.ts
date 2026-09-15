export const PLACEHOLDER = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23cbd5e1%22%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%2F%3E%3C%2Fsvg%3E";

export interface CommitteeMember {
  name: string;
  role: string;
  category: 'Core Committee' | 'Office Bearers' | 'Advisors' | 'Organising Committee';
  image: string;
  linkedin?: string;
}

export const OFFICE_BEARERS: CommitteeMember[] = [
  { 
    name: 'Prabhat Kumar, IRS', 
    role: 'Chairman', 
    category: 'Office Bearers',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Prabhat%20Kumar%20IRS%20PanIIT'
  },
  { 
    name: 'Dr. Amitabh Ranjan', 
    role: 'Vice Chairman', 
    category: 'Office Bearers',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Amitabh%20Ranjan.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Amitabh%20Ranjan%20PanIIT'
  },
  { 
    name: 'Rajeev Singh', 
    role: 'General Secretary', 
    category: 'Office Bearers',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_20.png',
    linkedin: 'https://www.linkedin.com/in/rajeev-singh-2257a84/'
  },
  { 
    name: 'Ashish Kela', 
    role: 'Treasurer', 
    category: 'Office Bearers',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ashish%20Kela%20PanIIT'
  },
];

export const ADVISORS: CommitteeMember[] = [
  { 
    name: 'Prof. V. Kamakoti', 
    role: 'Director, IIT Madras', 
    category: 'Advisors',
    image: "https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20V.%20Kamakoti%20Director%2C%20IIT%20Madras.jpg",
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=V%20Kamakoti%20IIT%20Madras'
  },
  { 
    name: 'Dr. K. N. Satyanarayana', 
    role: 'Director, IIT Tirupati', 
    category: 'Advisors',
    image: 'https://wabflow.b-cdn.net/paniit/dignitaries%20pictures/Prof.%20Satyamnarayana_%20IIT%20Tirupathi%20director.jpeg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=K%20N%20Satyanarayana%20IIT%20Tirupati'
  },
  { 
    name: 'Prof. Mahesh Panchagnula', 
    role: 'Ex Dean, IIT Madras', 
    category: 'Advisors',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Mahesh%20Panchagnula%20IIT'
  },
];

export const CORE_COMMITTEE: CommitteeMember[] = [
  { 
    name: 'Swadeep Pillarisetti', 
    role: 'Summit Chair', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_6.png',
    linkedin: 'https://www.linkedin.com/in/swadeep/'
  },
  { 
    name: 'Rajesh Kumar Dasari', 
    role: 'Summit Co-Chair', 
    category: 'Core Committee',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Rajesh%20Kumar%20Dasari%20PanIIT'
  },
  { 
    name: 'Sudhakar Gande', 
    role: 'Summit Co-Chair', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_16.jpg',
    linkedin: 'https://www.linkedin.com/in/sudhakar-gande-a14b88311/'
  },
  { 
    name: 'M S Reddy', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_image_team_15.png',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=M%20S%20Reddy%20PanIIT'
  },
  { 
    name: 'Dr. Ramunaidu Randhi', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ramunaidu%20Randhi%20PanIIT'
  },
  { 
    name: 'Dr. Gundala Nagaraju', 
    role: 'Core Committee', 
    category: 'Core Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Gundala%20Nagaraju%20(right).jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Dr%20Gundala%20Nagaraju'
  },
];

export const CORE_COMMITTEE_MEMBERS = CORE_COMMITTEE.slice(2);

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  { 
    name: 'Neeraj Kumar', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_5.png',
    linkedin: 'https://www.linkedin.com/in/neekum/'
  },
  { 
    name: 'Praveen Kumar', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_0/pan_team_4.png',
    linkedin: 'https://www.linkedin.com/in/praveeniitd//'
  },
  { 
    name: 'Abhilash Kondai', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Abhilash%20Kondai.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Abhilash%20Kondai'
  },
  { 
    name: 'J V Prem Kumar Reddy', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/J%20V%20Prem%20Kumar%20Reddy.jpeg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Prem%20Kumar%20Reddy%20IIT'
  },
  { 
    name: 'NS Bhanuprakash', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/NS%20Bhanuprakash.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=NS%20Bhanuprakash'
  },
  { 
    name: 'Pradip Sasmal', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Pradip%20Sasmal.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Pradip%20Sasmal'
  },
  { 
    name: 'Prof. Murali Krishna Iyyanki', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Prof.%20Murali%20Krishna%20%20Iyyanki%20(left).jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Murali%20Krishna%20Iyyanki'
  },
  { 
    name: 'Rajesh Rathi', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Rajesh%20Rathi.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Rajesh%20Rathi%20IIT'
  },
  { 
    name: 'Phani Arega', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Phani%20Arega.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Phani%20Arega'
  },
  { 
    name: 'Sai Teja Duggempudi', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sai%20Teja%20Duggempudi.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sai%20Teja%20Duggempudi'
  },
  { 
    name: 'Tejavath Jagadeesh', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Tejavath%20Jagadeesh'
  },
  { 
    name: 'Dr. Anjanna Matta', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Dr.%20Anjanna%20Matta.jpeg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Anjanna%20Matta'
  },
  { 
    name: 'C P Madhusudan', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/C%20P%20Madhusudan_.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=CP%20Madhusudan'
  },
  { 
    name: 'Thejaswini Kalasamudram', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Thejaswini%20Kalasamudram.jpeg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Thejaswini%20Kalasamudram'
  },
  { 
    name: 'Gadi Akhil Sai Ram', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Gadi%20Akhil%20Sai%20Ram.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Gadi%20Akhil%20Sai%20Ram'
  },
  { 
    name: 'Kshitij Tiwari', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://afilemanager.s3.dualstack.ap-southeast-1.amazonaws.com/prod/cid_2567/kshitij.jpg',
    linkedin: 'https://www.linkedin.com/in/kas-kshitij/'
  },
  { 
    name: 'Sanskreeti Raj', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: 'https://wabflow.b-cdn.net/paniit/organising%20committee/Sanskreeti%20Raj.jpg',
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sanskreeti%20Raj'
  },
  { 
    name: 'Vishakh Agarwal', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Vishakh%20Agarwal'
  },
  { 
    name: 'Vishal Bhandari', 
    role: 'Committee Member', 
    category: 'Organising Committee',
    image: PLACEHOLDER,
    linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Vishal%20Bhandari%20IIT'
  },
];

export const ALL_COMMITTEE_MEMBERS: CommitteeMember[] = [
  ...CORE_COMMITTEE,
  ...OFFICE_BEARERS,
  ...ADVISORS,
  ...COMMITTEE_MEMBERS,
];

