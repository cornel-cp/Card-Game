import { useEffect } from 'react';
import { Tooltip } from 'bootstrap';

const useBsTooltip = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);
};

export default useBsTooltip;
