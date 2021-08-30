import React from "react";
import { MdLocationOn, MdWork } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GitUser = ({ userInfo }) => {
  let dateJoined = userInfo.created_at.slice(0, 10).split("-");

  return (
    <section className="bg-white-content pt-10 mb-10 shadow-2xl rounded-xl text-sm ">
      <article className="pl-6 pb-6 flex">
        <div>
          <img
            src={userInfo.avatar_url}
            alt="User Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="pl-8">
          <h3 className="text-h1-blue font-bold text-lg">{userInfo.name}</h3>
          <p>
            <a
              href={userInfo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-btn-blue"
            >
              @{userInfo.login}
            </a>
          </p>
          <p className="text-gray-600 pt-2">
            Joined{" "}
            {`${dateJoined[2]} ${months[dateJoined[1] - 1]} ${dateJoined[0]}`}
          </p>
        </div>
      </article>

      <article className="pl-6">
        <p className="text-gray-600">
          {userInfo.bio ? userInfo.bio : "This profile has no bio"}
        </p>
      </article>

      <article className="bg-gray-200 mt-6 py-2 text-gray-700 w-11/12 rounded-xl flex justify-evenly mx-auto">
        <div>
          <p>Repos</p>
          <span className="font-bold text-base text-black flex justify-center">
            {userInfo.public_repos}
          </span>
        </div>
        <div className="px-4">
          <p>Followers</p>
          <span className="font-bold text-base text-black flex justify-center">
            {userInfo.followers}
          </span>
        </div>
        <div>
          <p>Following</p>
          <span className="font-bold text-base text-black flex justify-center">
            {userInfo.following}
          </span>
        </div>
      </article>

      <article className="text-blue-info pl-6 py-6 flex flex-col pt-8">
        <div className="flex items-center py-2">
          <MdLocationOn className="text-2xl mr-4" />
          <p className="capitalize">
            {userInfo.location ? userInfo.location : "not available"}
          </p>
        </div>
        <div className="flex items-center py-2">
          <BiLinkAlt className="text-2xl mr-4" />
          <p className={!userInfo.blog ? "capitalize" : ""}>
            {userInfo.blog ? (
              <a
                href={userInfo.blog ? userInfo.blog : ""}
                target="_blank"
                alt="link"
                rel="noreferrer"
              >
                {userInfo.blog ? userInfo.blog : "not available"}
              </a>
            ) : (
              <p className="">not available</p>
            )}
          </p>
        </div>
        <div className="flex items-center py-2">
          <FaTwitter className="text-2xl mr-4" />
          <p className="capitalize">
            {userInfo.twitter_username
              ? userInfo.twitter_username
              : "not available"}
          </p>
        </div>
        <div className="flex items-center py-2">
          <MdWork className="text-2xl mr-4" />
          <p className="capitalize">
            {userInfo.company ? userInfo.company : "not available"}
          </p>
        </div>
      </article>
    </section>
  );
};

export default GitUser;
