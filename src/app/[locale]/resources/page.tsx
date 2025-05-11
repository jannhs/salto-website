import Image from 'next/image';
import classes from './page.module.css';
import AccordionFAQ from '@/components/resources/faq';



export default function ResourcesPage() {
    return (
        <div className={classes.wrapper}>
            <AccordionFAQ />
        </div>
    );
}