import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./button";
import { UseMediaQuery } from "@/hooks/use_media_query";
import { ProjecInfo } from "@/types/project";
import { Separator } from "./separator";
import { VscDebugStart } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { AspectRatio } from "./aspect-ratio";

interface ProjectDialogProps {
  open: boolean;
  handleClose: () => void;
  project?: ProjecInfo | null;
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({ open, handleClose, project }) => {
  const isDesktop = UseMediaQuery("(min-width: 768px)");

  console.log(project)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>{project?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex gap-5">
            <div className="flex flex-col gap-3 min-w-60">
              <AspectRatio ratio={1.5 / 1}>
                <img
                  src={project?.photo}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="flex justify-between">
                <a href={project?.link} target="_blank">
                  <Button variant="ghost" size="default">
                    Start
                    <VscDebugStart />
                  </Button>
                </a>
                <a href={project?.github} target="_blank">
                  <Button variant="ghost" size="icon">
                    <FaGithub size="large" />
                  </Button>
                </a>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-5">
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {project?.about}
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-5">
                {project?.tech?.map((photo) => (
                  <Button variant={"secondary"}>
                    <img
                      src={photo}
                      alt={`${project.title} - ${photo}`}
                      className="w-5"
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleClose}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}