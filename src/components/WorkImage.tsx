// import { useState } from "react";
// import { MdArrowOutward } from "react-icons/md";

// interface Props {
//   image: string;
//   alt?: string;
//   video?: string;
//   link?: string;
// }

// const WorkImage = (props: Props) => {
//   const [isVideo, setIsVideo] = useState(false);
//   const [video, setVideo] = useState("");
//   const handleMouseEnter = async () => {
//     if (props.video) {
//       setIsVideo(true);
//       const response = await fetch(`src/assets/${props.video}`);
//       const blob = await response.blob();
//       const blobUrl = URL.createObjectURL(blob);
//       setVideo(blobUrl);
//     }
//   };

//   return (
//     <div className="work-image">
//       <a
//         className="work-image-in"
//         href={props.link}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={() => setIsVideo(false)}
//         target="_blank"
//         data-cursor={"disable"}
//       >
//         {props.link && (
//           <div className="work-link">
//             <MdArrowOutward />
//           </div>
//         )}
//         <img src={props.image} alt={props.alt} />
//         {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
//       </a>
//     </div>
//   );
// };

// export default WorkImage;

import { MdArrowOutward } from "react-icons/md";
import './styles/WorkImage.css'

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img src={image} alt={alt || "Project preview"} />
      </a>
    </div>
  );
};

export default WorkImage;

