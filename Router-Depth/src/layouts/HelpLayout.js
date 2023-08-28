import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem?</p>
      <p>This is more information to show this is the help component</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
