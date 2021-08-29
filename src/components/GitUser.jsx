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
    <section className="bg-white-content mb-10 shadow-2xl rounded-xl">
      <article>
        <img
          src={userInfo.avatar_url}
          alt="User Logo"
          className="w-20 h-20 rounded-full"
        />
        <h3>{userInfo.name}</h3>
        <p>
          <a href={userInfo.html_url} target="_blank" rel="noreferrer">
            @{userInfo.login}
          </a>
        </p>
        <p>
          Joined{" "}
          {`${dateJoined[2]} ${months[dateJoined[1] - 1]} ${dateJoined[0]}`}
        </p>
      </article>

      <article>
        <p>{userInfo.bio ? userInfo.bio : "This profile has no bio"}</p>
      </article>

      <article>
        <div>
          <p>Repos</p>
          <span>{userInfo.public_repos}</span>
        </div>
        <div>
          <p>Followers</p>
          <span>{userInfo.followers}</span>
        </div>
        <div>
          <p>Following</p>
          <span>{userInfo.following}</span>
        </div>
      </article>

      <article>
        <div>
          <MdLocationOn />
          <p className="capitalize">
            {userInfo.location ? userInfo.location : "not available"}
          </p>
        </div>
        <div>
          <BiLinkAlt />
          <p className="">{userInfo.blog ? userInfo.blog : "not available"}</p>
        </div>
        <div>
          <FaTwitter />
          <p className="capitalize">
            {userInfo.twitter_username
              ? userInfo.twitter_username
              : "not available"}
          </p>
        </div>
        <div>
          <MdWork />
          <p className="capitalize">
            {userInfo.company ? userInfo.company : "not available"}
          </p>
        </div>
      </article>
    </section>
  );
};

export default GitUser;
