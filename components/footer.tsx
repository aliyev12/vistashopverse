import { APP_NAME } from "@/lib/constants";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      {/* <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div> */}
      <div className="p-5 flex flex-col flex-center text-center items-center space-y-5">
        <p>&copy; {currentYear} Abdul Aliyev</p>
        <Button asChild>
          <a href="https://www.aaliyev.com/contact" target="_blank">
            Get in touch
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
