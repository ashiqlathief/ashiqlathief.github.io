const data = {
  seo: {
    title: "Ashiq Ali Robotics & AI Engineer",
    description:
      "Portfolio: Safe 3D drone navigation with Generative AI, real-robot manipulation with Kinova Gen3, ROS 2 systems.",
    url: "https://ashiqlathief.github.io",
  },

  // Pilcrow Rounded is an Adobe Fonts typeface. Paste your web project's kit ID
  // here (https://fonts.adobe.com/my_fonts#web_projects-section) to enable it;
  // until then headings use Nunito (SemiBold).
  // Terms highlighted wherever they appear in the body text (matched
  // case-insensitively, longest first). Add or remove terms freely.
  keyTerms: [
    "diffusion models",
    "diffusion predictive control",
    "diffusion-based drone navigation",
    "drone navigation",
    "3D drone navigation",
    "visuomotor policies",
    "visuomotor policy",
    "visuomotor control",
    "Master's thesis",
    "NVIDIA Isaac Sim",
    "Isaac Sim",
    "Isaac Lab",
    "SLSQP",
    "SLSQP projection",
    "SLSQP projector",
    "SDPC",
    "DPCC",
    "Vision Transformer",
    "ViT",
    "U-Net",
    "Transformer",
    "ROS 2 Jazzy",
    "ROS 2",
    "Kinova Gen3",
    "UR5e",
    "AprilTag",
    "6-DoF pose estimation",
    "6D object pose tracking",
    "pose-based visual servoing",
    "PBVS",
    "M3T",
    "ICG",
    "SIFT",
    "Hough voting",
    "Gazebo Harmonic",
    "MoveIt 2",
    "RealSense",
    "Crazyflie",
    "MAVROS",
    "Hugging Face",
    "hard safety constraints",
    "robotics",
    "autonomous systems",
    "Germany",
  ],

  fonts: { adobeKitId: "" },

  name: "Ashiq Ali Abdul Lathief",
  email: "ashiq.lathief@gmail.com",
  // Put the PDF at static/cv/ with this exact name.
  cv: { file: "cv/Ashiq_Ali_Abdul_Lathief_CV.pdf", label: "Download CV" },
  linkedin: "https://www.linkedin.com/in/ashiq-ali-abdul-lathief-266891191/",
  linkedinHandle: "ashiq-ali-abdul-lathief",
  github: "https://github.com/ashiqlathief",
  githubHandle: "ashiqlathief",

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Paderborn, Germany · Open to work",
    typedPhrases: [
      "Robotics Engineer",
      "AI Researcher",
      "Diffusion Policy Dev",
      "ROS 2 Engineer",
      "Drone Navigation",
    ],
    bio: "I'm a Master's student in Paderborn, mostly trying to get robots to move safely without crashing into things. I recently wrapped up my thesis on diffusion models for safe drone navigation, and I'm still figuring a lot of it out. These are the things I've built so far.",
    journey: {
      now: {
        kicker: "Where I am",
        text: "Just wrapped up my Master's thesis at Universität Paderborn on safe 3D drone navigation, combining diffusion predictive control with visuomotor policies tested in Isaac Sim.",
      },
      next: {
        kicker: "Where I'm headed",
        text: "A robotics team in Germany that ships to real hardware, not just simulation but also building things people actually use.",
      },
      poster: "media/creation-of-adam-poster.jpg",
      video: "media/creation-of-adam-720-v2.mp4",
    },
  },

  about: {
    // Each paragraph is a list of parts: plain strings, or { strong } for bold.
    paragraphs: [
      [
        "I'm the first in my family to work in engineering, nobody around me had a roadmap for this, so I mostly figured it out by getting curious about whatever came next. Some of it came from coursework, but just as much came from side projects that took on a life of their own and from building things to see what broke. I've always believed engineers should be part of the solution, not part of the problem that's still the filter I run every project through. I don't think of myself as an expert. I just keep starting things, and a few of them have worked out well enough to end up here.",
      ],
      [
        "I'm actively looking for full-time roles in ",
        { strong: "Germany" },
        " in robotics, autonomous systems, or applied AI research, ideally at a company pushing the boundary of what robots can do in the real world.",
      ],
      [
        "When I'm not working on robots, I enjoy exploring Germany, learning German (towards B2), and planning my next trip.",
      ],
    ],
    badge: "Available for full-time work in Germany",
    photo: "media/photo.jpg",
    photoTitle: "Robotics & AI Engineer · Paderborn, DE",
    cards: [
      {
        header: "Education",
        rows: [
          ["Degree", "M.Sc. Electrical Systems Eng."],
          ["University", "Universität Paderborn"],
          ["Thesis", "Safe 3D Drone Navigation using Generative AI"],
        ],
      },
      {
        header: "Personal",
        rows: [
          ["Location", "Paderborn, Germany"],
          ["Open to", "Full-time in Germany"],
          ["Interests", "Robotics · AI"],
          ["Languages", "English, German (learning)"],
        ],
      },
    ],
  },

  projects: [
    {
      index: "01",
      repo: "https://github.com/ashiqlathief/SDPC-imagepolicy",
      label: "Master's Thesis",
      title: "Safe 3D Drone Navigation with Generative AI",
      desc: "SDPC (Safe Diffusion Policy with Constraint) extends DPCC from 2D manipulator tasks to full 3D drone navigation in NVIDIA Isaac Sim. A diffusion model proposes trajectories conditioned on first-person image history, and an SLSQP projector sits inside the denoising loop to push each proposal onto the feasible set: obstacle avoidance, altitude bounds and corridor bounds. Hard safety constraints are enforced at inference time, with no retraining.",
      tags: [
        "Diffusion Models",
        "NVIDIA Isaac Sim",
        "Isaac Lab",
        "Vision Transformers",
        "U-Net",
        "PyTorch",
        "SLSQP",
        "ROS 2",
      ],
      video: "media/demo.mp4",
      highlights: [
        "Compared U-Net and DiT-style Transformer denoisers, with a ViT observation encoder and optional goal-pose conditioning",
        "SLSQP projection enforces safety constraints at every denoising step, against ground-truth or depth-perceived obstacles",
        "Depth-based obstacle detector (U-disparity map + contour) feeds real-time obstacle estimates into the projector, validated on RealSense hardware over ROS 2",
        "Data collected in Isaac Lab with a cascaded PID controller; same policy runs on a physical Crazyflie via MAVROS; checkpoint published on Hugging Face",
      ],
    },
    {
      index: "02",
      label: "GET Lab · 2023-2024",
      title: "Rescue Robot Object Handling System",
      desc: "Deployed and programmed the Kinova Gen3 robotic arm for real manipulation tasks. Built an AprilTag-based 6-DoF pose estimation pipeline on real hardware with a Qt backend and ROS 2 action server-client architecture. Studied pose-based visual servoing for closed-loop control.",
      tags: ["ROS 2", "Kinova Gen3", "AprilTag", "PBVS", "Qt", "C++"],
      video: "media/kinova.mp4",
      highlights: [
        "AprilTag 6-DoF pose estimation on real hardware",
        "Pose-based visual servoing (PBVS) for closed-loop control",
        "GET Lab, Universität Paderborn",
      ],
    },
    {
      index: "03",
      repo: "https://github.com/ashiqlathief/dexterity-ros2",
      label: "ROS 2 Port · GET Lab code",
      title: "Dexterity: Hand-Eye Manipulation in ROS 2 Jazzy",
      desc: "Ported the GET Lab closed-loop hand-eye coordination stack (object handling) to ROS 2 Jazzy, running on a simulated Universal Robots UR5e with a Robotiq 2F-85 gripper in Gazebo Harmonic and MoveIt 2. The workspace covers the action server, perception, an rqt control panel, ground-truth evaluation, hazmat sign detection and 6D object pose tracking.",
      tags: [
        "ROS 2 Jazzy",
        "Gazebo Harmonic",
        "MoveIt 2",
        "UR5e",
        "M3T / ICG",
        "OpenCV",
        "C++",
        "Python",
      ],
      highlights: [
        "Action-server hand-eye controller with an rqt \"Arm Control\" panel for bootstrapping and starting trackers",
        "6D object pose tracking with M3T and ICG, switchable at runtime",
        "Hazmat sign detection by SIFT template matching with Hough voting",
        "Gazebo ground-truth evaluation of tracking error, true gripper distance and planning times",
      ],
    },
  ],

  skills: [
    { icon: "skillsIcon/C_lang.png", alt: "C++", title: "Python, C++", sub: "Scientific computing, scripting, real-time robotics", delay: "" },
    { icon: "skillsIcon/ROS.jpg", alt: "ROS", title: "ROS, ROS 2", sub: "Action servers, Nav stack, Gazebo, SLAM, real hardware", delay: "reveal-delay-1" },
    { icon: "skillsIcon/isaacsim.png", alt: "Isaac Sim", title: "NVIDIA Isaac Sim", sub: "Physics simulation, synthetic data, drone environments", delay: "reveal-delay-1" },
    { icon: "skillsIcon/OpenCV.png", alt: "OpenCV", title: "PyTorch, OpenCV", sub: "Diffusion policies, ViT, CNN, model training", delay: "reveal-delay-2" },
    { icon: "skillsIcon/CPU.svg", alt: "Diffusion Models", title: "Diffusion Models", sub: "DPCC, U-Net backbone, Transformer backbone, SLSQP", delay: "" },
    { icon: "skillsIcon/code.svg", alt: "Code", title: "MATLAB, Simulink", sub: "Control systems, simulation, signal processing", delay: "reveal-delay-1" },
    { icon: "skillsIcon/CAD.svg", alt: "CAD", title: "SolidWorks, CAD", sub: "Mechanical design, robot modelling", delay: "reveal-delay-1" },
    { icon: "skillsIcon/airplane.svg", alt: "Git", title: "Git, Qt, Linux", sub: "Version control, GUI apps, Docker", delay: "reveal-delay-2" },
  ],

  contact: {
    // Optional: paste a Formspree (or similar) endpoint, e.g.
    // "https://formspree.io/f/xxxxxxxx", to deliver messages straight to your
    // inbox. While empty, the form opens the visitor's email app instead.
    formEndpoint: "",
    intro: [
      "I'm looking for ",
      { strong: "robotics and AI engineering roles" },
      " in Germany for autonomous systems, robot learning, applied AI research. If your team is building things that move in the real world, I'd love to talk.",
    ],
    ctaTitle: "Send me a message",
    ctaText:
      "Looking for roles in robotics engineering, autonomous systems, or applied AI, particularly at companies working on real hardware.",
  },

  footer: ["Ashiq Ali Abdul Lathief · Paderborn, Germany", "Robotics & AI Engineer"],
}

export default data
