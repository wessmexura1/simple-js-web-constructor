import { modal } from "/modal";
import { Site } from "./classes/site";
import "/styles/main.css";
import { Sidebar } from "./classes/sidebar";

const site = new Site("#site");

site.render(modal);

const updCallback = (newBlock) => {
    modal.push(newBlock);
    site.render(modal);
};

const sidebar = new Sidebar("#panel", updCallback);
