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
    <section className="bg-white-content dark:bg-dark-content transform duration-200 pt-10 mb-10 shadow-2xl rounded-xl text-sm ">
      <article className="pl-6 pb-6 flex">
        <div>
          <img
            src={userInfo.avatar_url}
            alt="User Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="pl-8 ">
          <h3 className="text-h1-blue dark:text-white   font-bold text-lg">
            {userInfo.name}
          </h3>
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
          <p className="text-gray-600 dark:text-white pt-2">
            Joined{" "}
            {`${dateJoined[2]} ${months[dateJoined[1] - 1]} ${dateJoined[0]}`}
          </p>
        </div>
      </article>

      <article className="pl-6 text-lg">
        <p className="text-gray-600 dark:text-white  ">
          {userInfo.bio ? userInfo.bio : "This profile has no bio"}
        </p>
      </article>

      <article className="bg-gray-200 dark:bg-dark-back mt-6 py-2 text-gray-700 dark:text-white w-11/12 rounded-xl flex justify-evenly mx-auto transform duration-200">
        <div>
          <p>Repos</p>
          <span className="font-bold pt-1 text-base text-black dark:text-white flex justify-center">
            {userInfo.public_repos}
          </span>
        </div>
        <div className="px-4">
          <p>Followers</p>
          <span className="font-bold pt-1 text-base text-black dark:text-white flex justify-center">
            {userInfo.followers}
          </span>
        </div>
        <div>
          <p>Following</p>
          <span className="font-bold pt-1 text-base text-black dark:text-white flex justify-center">
            {userInfo.following}
          </span>
        </div>
      </article>

      <article className="text-blue-info dark:text-white pl-6 py-6 flex flex-col md:grid md:grid-cols-2 pt-8">
        <div className="flex items-center py-2">
          <MdLocationOn className="text-2xl mr-4" />
          <p className="capitalize">
            {userInfo.location ? userInfo.location : "not available"}
          </p>
        </div>
        <div className="flex items-center py-2">
          <BiLinkAlt className="text-2xl mr-4" />
          <div className={!userInfo.blog ? "capitalize" : ""}>
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
          </div>
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
