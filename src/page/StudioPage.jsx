import { Studio, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { postSchema, testimonialSchema } from "../schemas/sanitySchema";
import escrowLogo from "../assets/images/logo.svg";

const StudioLogo = (props) => {
  return (
    <div className="flex items-center gap-2 ">
      <img
        alt="logo"
        src={escrowLogo}
        width={30}
        height={30}
        className="object-cover rounded-full translate-x-3"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

const SanityStudio = () => {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      }}
    >
      <Studio
        config={defineConfig({
          plugins: [deskTool()],
          studio: {
            components: {
              logo: StudioLogo,
            },
          },
          basePath: "/studio",
          name: "Escrow_Tech_Content_Studio",
          title: "Escrow Tech Content Studio",
          projectId: "xymdbyrp",
          dataset: "production",
          schema: {
            types: [postSchema, testimonialSchema],
          },
        })}
      />
    </div>
  );
};

export default SanityStudio;
