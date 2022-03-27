import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import { CreateIcon } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Digiconn</h2>
          <h3>
            <FiberManualRecord />
            Vivek Verma👨🏻‍🎤
          </h3>
        </div>
        <Create />
      </div>
      {/* here using the concept of props */}
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channel" />
      <hr />
      <SidebarOption Icon={Add} title="Add channel" />

      {/* connect to database and list the all channels */}
    </div>
  );
}

export default Sidebar;
