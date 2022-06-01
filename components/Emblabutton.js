import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const PrevButton = ({ enabled, onClick }) => (
    <button
      className=".embla__button"
      onClick={onClick}
      disabled={!enabled}
    >
      {!enabled ? <ArrowBackIosIcon className=' right-[88%] lg:static lg:mr-[30px]' color='disabled'/> : (<ArrowBackIosIcon className=' right-[88%] lg:static lg:mr-[30px]'/>) }
       
    </button>
  );
  
  export const NextButton = ({ enabled, onClick }) => (
    <button
      className=".embla__button"
      onClick={onClick}
      disabled={!enabled}
    >
      {!enabled ? <ArrowForwardIosIcon className='lg:mr-[30px]' color='disabled'/> : (<ArrowForwardIosIcon className=' right-[6%] lg:static  lg:mr-[30px]'/>) }
    </button>
  );

 
                             