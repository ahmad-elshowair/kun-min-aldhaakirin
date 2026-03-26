import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguageStore } from "@/store/useLanguageStore";
import { BlessModalProps } from "@/definitions";
import { cairo } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const BlessModal = ({ isOpen, onOpenChange, bless }: BlessModalProps) => {
  const { language } = useLanguageStore();
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-4 h-6 w-6 rounded-md hover:bg-orange-100",
              language === "ar" ? "left-4" : "right-4",
            )}
          >
            <X className="h-4 w-4 text-orange-400" />
          </Button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle
            className={cn(
              "text-orange-400",
              cairo.className,
              language === "ar" && "text-right",
            )}
          >
            {language === "ar" ? "الثواب" : "Blessing"}
          </DialogTitle>
        </DialogHeader>
        <div
          className={cn(
            "mt-3",
            cairo.className,
            language === "ar" && "text-right",
          )}
        >
          <p>{bless}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlessModal;
