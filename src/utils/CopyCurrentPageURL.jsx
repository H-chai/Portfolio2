import { useState } from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export function CopyCurrentPageURL() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert('Failed to copy');
    }
  };

  return (
    <li>
      <button
        onClick={handleCopy}
        className="bg-yellow flex items-center w-fit rounded-full pl-3 pr-1.5 py-1 gap-1.5 group cursor-pointer"
      >
        <span className="overflow-hidden">
          <span className="text-slide whitespace-nowrap">
            {copied ? 'Copied!' : 'Share'}
          </span>
        </span>
        <span className="w-6 h-6 bg-dark-green flex items-center justify-center rounded-full">
          <ShareOutlinedIcon className="text-yellow !w-4 !h-4 -ml-0.5" />
        </span>
      </button>
    </li>
  );
}
