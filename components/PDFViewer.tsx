'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

const PDFViewer = ({ isOpen, onClose, fileUrl }: PDFViewerProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="w-full h-[80vh]">
          <iframe
            src={`${fileUrl}#toolbar=0`}
            width="100%"
            height="100%"
            className="border-none"
          >
            <p>
              PDF görüntüleyici yüklenemedi.{' '}
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF&apos;i indir
              </a>
            </p>
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
