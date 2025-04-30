import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttons }) => {
  if (!buttons || !Array.isArray(buttons)) {
    console.error("The 'buttons' prop is missing or invalid.");
    // prevent rendering if buttons is undefined or invalid
    return null;
  }

  return (
    <div className="flex justify-between mt-6 gap-8 m-4">
      {buttons.map((button, index) => {
        const ButtonTag = button.href ? "a" : "button";
        return (
          <ButtonTag
            key={index}
            href={button.href}
            onClick={button.onClick}
            className="py-2 px-4 capitalize font-semibold text-sm text-center rounded-md text-white bg-[#309689] hover:bg-teal-700"
          >
            {button.label}
          </ButtonTag>
        );
      })}
    </div>
  );
};

// PropTypes validation
Button.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      onClick: PropTypes.func,
      label: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(["primary"]).isRequired,
    })
  ).isRequired,
};

export default Button;