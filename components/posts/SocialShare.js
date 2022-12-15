import React from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const SocialShare = () => {
  let href;
  if (typeof window !== 'undefined') {
    href = window.location.href;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Social Share</h3>
      <div className="py-4">
        <ul className="flex" style={{ listStyle: 'none' }}>
          <li className="px-1">
            <TwitterShareButton
              url={href}
              quote={"at MaitriJhadanshi"}
            >
              <TwitterIcon
                logofillcolor="white"
                size="35"
                round={true}
              ></TwitterIcon>
            </TwitterShareButton>
          </li>
          <li className="px-1">
            <WhatsappShareButton
              url={href}
              quote={"at MaitriJhadanshi"}
            >
              <WhatsappIcon
                logofillcolor="white"
                size="35"
                round={true}
              ></WhatsappIcon>
            </WhatsappShareButton>
          </li>

          <li className="px-1">
            <TelegramShareButton
              url={href}
              quote={"at MaitriJhadanshi"}
            >
              <TelegramIcon
                logofillcolor="white"
                size="35"
                round={true}
              ></TelegramIcon>
            </TelegramShareButton>
          </li>
          <li className="px-1">
            <LinkedinShareButton
              url={href}
              quote={"at MaitriJhadanshi"}
            >
              <LinkedinIcon
                logofillcolor='white'
                size='35'
                round={true}
              >

              </LinkedinIcon>
            </LinkedinShareButton>
          </li>

          <li className="px-1">
            <EmailShareButton
              url={href}
              quote={"at MaitriJhadanshi"}
            >
              <EmailIcon
                logofillcolor='white'
                size='35'
                round={true}
              >

              </EmailIcon>
            </EmailShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShare;