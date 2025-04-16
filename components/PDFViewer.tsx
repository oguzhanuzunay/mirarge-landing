'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

const PDFViewer = ({ isOpen, onClose, fileUrl }: PDFViewerProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-[90vw] max-h-[90vh]">
        <DialogTitle className="sr-only">Döküman Görüntüleyici</DialogTitle>
        <div className="h-[80vh] w-full">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={fileUrl}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
