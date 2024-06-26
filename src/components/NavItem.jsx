import PropTypes from "prop-types";

const NavItem = ({ title, svg }) => {
  switch (svg) {
    case "equipment": {
      svg = (
        <svg
          className=" h-8 w-8 fill-black group-hover:fill-white md:h-10 md:w-10"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7781 1.39348C20.1686 1.00295 20.8018 1.00295 21.1923 1.39348L22.6066 2.80769C22.9971 3.19822 22.9971 3.83138 22.6066 4.22191C22.216 4.61243 21.5829 4.61243 21.1923 4.22191L19.7781 2.80769C19.3876 2.41717 19.3876 1.784 19.7781 1.39348Z"
            fill=""
          />
          <path
            d="M16.2425 2.10051C16.633 1.70999 17.2662 1.70999 17.6567 2.10051L21.8993 6.34315C22.2899 6.73368 22.2899 7.36684 21.8993 7.75736C21.5088 8.14789 20.8756 8.14789 20.4851 7.75736L16.2425 3.51472C15.852 3.1242 15.852 2.49103 16.2425 2.10051Z"
            fill=""
          />
          <path
            d="M16.9497 8.46463L8.46451 16.9498L10.5858 19.0711C10.9763 19.4616 10.9763 20.0948 10.5858 20.4853C10.1952 20.8758 9.56207 20.8758 9.17155 20.4853L3.5147 14.8284C3.12417 14.4379 3.12417 13.8048 3.51469 13.4142C3.90522 13.0237 4.53838 13.0237 4.92891 13.4142L7.05029 15.5356L15.5355 7.05041L13.4141 4.92903C13.0236 4.53851 13.0236 3.90534 13.4141 3.51482C13.8046 3.12429 14.4378 3.12429 14.8283 3.51482L20.4852 9.17167C20.8757 9.56219 20.8757 10.1954 20.4852 10.5859C20.0947 10.9764 19.4615 10.9764 19.071 10.5859L16.9497 8.46463Z"
            fill=""
          />
          <path
            d="M3.5146 16.2428C3.12408 15.8523 2.49091 15.8523 2.10039 16.2428C1.70986 16.6334 1.70986 17.2665 2.10039 17.6571L6.34303 21.8997C6.73355 22.2902 7.36672 22.2902 7.75724 21.8997C8.14777 21.5092 8.14777 20.876 7.75724 20.4855L3.5146 16.2428Z"
            fill=""
          />
          <path
            d="M2.80757 19.7782C2.41705 19.3877 1.78388 19.3877 1.39336 19.7782C1.00283 20.1688 1.00283 20.8019 1.39336 21.1925L2.80757 22.6067C3.1981 22.9972 3.83126 22.9972 4.22178 22.6067C4.61231 22.2161 4.61231 21.583 4.22178 21.1925L2.80757 19.7782Z"
            fill=""
          />
        </svg>
      );
      break;
    }
    case "graphs": {
      svg = (
        <svg
          className="h-8 w-8 stroke-black group-hover:stroke-white md:h-10  md:w-10"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 9L13 13.9999L10.5 11.4998L7 14.9998"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    }
    case "calculator": {
      svg = (
        <svg
          className="h-8 w-8 stroke-black group-hover:stroke-white md:h-10  md:w-10"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4L4 20"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M4 7H7M10 7H7M7 7V4M7 7V10"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M14 17H17H20"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
      break;
    }
    case "timer": {
      svg = (
        <svg
          className="h-8 w-8 stroke-black group-hover:stroke-white md:h-10  md:w-10"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Calendar / Timer">
            <path
              id="Vector"
              d="M12 13V9M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z"
              stroke=""
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
      break;
    }
    case "settings": {
      svg = (
        <svg
          className="h-8 w-8 md:h-10 md:w-10"
          width="800px"
          height="800px"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            className="fill-black group-hover:fill-white"
            fill=""
            d="m80.16 29.054-5.958-.709 5.958.71Zm31.68 0-5.958.71 5.958-.71Zm34.217 19.756-2.365-5.515 2.365 5.514Zm10.081 3.352 5.196-3-5.196 3Zm7.896 13.676 5.196-3-5.196 3Zm-2.137 10.407-3.594-4.805 3.594 4.805Zm0 39.51 3.593-4.805-3.593 4.805Zm2.137 10.407 5.196 3-5.196-3Zm-7.896 13.676-5.196-3 5.196 3Zm-10.081 3.353 2.364-5.515-2.364 5.515Zm-34.217 19.755 5.958.709-5.958-.709Zm-31.68 0-5.958.709 5.958-.709Zm-34.217-19.755-2.364-5.515 2.364 5.515Zm-10.08-3.353-5.197 3 5.196-3Zm-7.897-13.676 5.196-3-5.196 3Zm2.137-10.407 3.594 4.805-3.594-4.805Zm0-39.51L26.51 81.05l3.593-4.805Zm-2.137-10.407 5.196 3-5.196-3Zm7.896-13.676-5.196-3 5.196 3Zm10.081-3.352-2.364 5.514 2.364-5.514Zm7.85 3.365-2.365 5.515 2.364-5.515Zm0 87.65 2.364 5.514-2.365-5.514ZM36.235 111.17l-3.594-4.805 3.594 4.805Zm76.823 41.535 5.958.71-5.958-.71Zm39.854-69.742-3.593-4.805 3.593 4.805Zm-16.369-30.074 2.364 5.514-2.364-5.514Zm-23.485-13.594-5.958.709 5.958-.71ZM88.104 16a14 14 0 0 0-13.902 12.345l11.916 1.419A2 2 0 0 1 88.104 28V16Zm15.792 0H88.104v12h15.792V16Zm13.902 12.345A14 14 0 0 0 103.896 16v12a2 2 0 0 1 1.986 1.764l11.916-1.419Zm1.219 10.24-1.219-10.24-11.916 1.419 1.219 10.24 11.916-1.419Zm24.675 4.71-9.513 4.08 4.729 11.028 9.513-4.08-4.729-11.028Zm17.642 5.867a14 14 0 0 0-17.642-5.867l4.729 11.029a2 2 0 0 1 2.521.838l10.392-6Zm7.896 13.676-7.896-13.676-10.392 6 7.896 13.676 10.392-6Zm-3.74 18.212a14 14 0 0 0 3.74-18.212l-10.392 6a2 2 0 0 1-.535 2.602l7.187 9.61Zm-8.984 6.718 8.984-6.718-7.187-9.61-8.983 6.718 7.186 9.61Zm8.984 23.182-8.984-6.718-7.186 9.61 8.983 6.718 7.187-9.61Zm3.74 18.212a14 14 0 0 0-3.74-18.212l-7.187 9.61a2 2 0 0 1 .535 2.602l10.392 6Zm-7.896 13.676 7.896-13.676-10.392-6-7.896 13.676 10.392 6Zm-17.642 5.867a14 14 0 0 0 17.642-5.867l-10.392-6a2.001 2.001 0 0 1-2.521.838l-4.729 11.029Zm-9.513-4.08 9.513 4.08 4.729-11.029-9.512-4.079-4.73 11.028Zm-16.381 19.03 1.219-10.24-11.916-1.419-1.219 10.24 11.916 1.419ZM103.896 176a14 14 0 0 0 13.902-12.345l-11.916-1.419a2 2 0 0 1-1.986 1.764v12Zm-15.792 0h15.792v-12H88.104v12Zm-13.902-12.345A14 14 0 0 0 88.104 176v-12a2 2 0 0 1-1.986-1.764l-11.916 1.419Zm-1.012-8.504 1.012 8.504 11.916-1.419-1.012-8.504-11.916 1.419ZM51.428 134.31l-7.85 3.366 4.73 11.029 7.849-3.366-4.73-11.029Zm-7.85 3.366a2 2 0 0 1-2.52-.838l-10.392 6a14 14 0 0 0 17.642 5.867l-4.73-11.029Zm-2.52-.838-7.896-13.676-10.392 6 7.896 13.676 10.392-6Zm-7.896-13.676a2 2 0 0 1 .535-2.602l-7.187-9.61a14 14 0 0 0-3.74 18.212l10.392-6Zm.535-2.602 6.132-4.585-7.187-9.61-6.132 4.585 7.187 9.61ZM26.51 81.05l6.132 4.586 7.187-9.61-6.132-4.586-7.187 9.61Zm-3.74-18.212a14 14 0 0 0 3.74 18.212l7.187-9.61a2 2 0 0 1-.535-2.602l-10.392-6Zm7.896-13.676L22.77 62.838l10.392 6 7.896-13.676-10.392-6Zm17.642-5.867a14 14 0 0 0-17.642 5.867l10.392 6a2 2 0 0 1 2.52-.838l4.73-11.029Zm7.849 3.366-7.85-3.366-4.729 11.029 7.85 3.366 4.729-11.029Zm18.045-18.316-1.012 8.504 11.916 1.419 1.012-8.504-11.916-1.419Zm-1.754 27.552c6.078-3.426 11.69-9.502 12.658-17.63L73.19 36.85c-.382 3.209-2.769 6.415-6.635 8.595l5.893 10.453Zm-21.02 1.793c7.284 3.124 15.055 1.57 21.02-1.793l-5.893-10.453c-3.704 2.088-7.481 2.468-10.398 1.217l-4.73 11.029ZM49 96c0-7.1-2.548-15.022-9.171-19.975l-7.187 9.61C35.36 87.668 37 91.438 37 96h12Zm23.448 40.103c-5.965-3.363-13.736-4.917-21.02-1.793l4.729 11.029c2.917-1.251 6.694-.871 10.398 1.218l5.893-10.454Zm-32.62-20.128C46.452 111.022 49 103.1 49 96H37c0 4.563-1.64 8.333-4.358 10.365l7.187 9.61Zm78.679 19.575c-5.536 3.298-10.517 8.982-11.406 16.446l11.916 1.419c.329-2.765 2.318-5.582 5.632-7.557l-6.142-10.308Zm20.402-1.953c-7.094-3.042-14.669-1.463-20.402 1.953l6.142 10.308c3.382-2.015 6.872-2.372 9.53-1.233l4.73-11.028Zm-53.803 20.135c-.968-8.127-6.58-14.202-12.658-17.629l-5.893 10.454c3.866 2.179 6.253 5.385 6.635 8.594l11.916-1.419ZM141 96c0 6.389 2.398 13.414 8.32 17.842l7.186-9.61C154.374 102.638 153 99.668 153 96h-12Zm8.32-17.842C143.398 82.586 141 89.61 141 96h12c0-3.668 1.374-6.638 3.506-8.232l-7.186-9.61ZM118.507 56.45c5.733 3.416 13.308 4.995 20.401 1.953l-4.729-11.029c-2.658 1.14-6.148.782-9.53-1.233l-6.142 10.31Zm-11.406-16.446c.889 7.464 5.87 13.148 11.406 16.446l6.142-10.309c-3.314-1.974-5.303-4.79-5.632-7.556l-11.916 1.419Z"
          />
          <path
            className="stroke-black group-hover:stroke-white"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M96 120c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24Z"
          />
        </svg>
      );
      break;
    }
  }
  return (
    <div className="group flex flex-col items-center gap-1 rounded-lg p-1 hover:text-white md:gap-2 md:p-3">
      {svg}
      <h3 className="hidden text-sm font-medium group-hover:inline-block lg:inline-block lg:text-lg">
        {title}
      </h3>
    </div>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default NavItem;
