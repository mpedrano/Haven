import styles from './Filter.module.css'
import Image from 'next/image'
import CatIcon from '../../../public/filter/caticon.svg'
import DogIcon from '../../../public/filter/dogicon.svg'
import OtherIcon from '../../../public/filter/othericon.svg'

export enum Filter {
    Dog = "All Dogs",
    Cat = "All Cats",
    Other = "Other"
}

type FilterIconProps = {
    filter: Filter
}

const FilterIcon = ({ filter }: FilterIconProps) => {
    let icon: string;

    switch (filter) {
        case Filter.Dog:
            icon = DogIcon
            break
        case Filter.Cat:
            icon = CatIcon
            break
        case Filter.Other:
            icon = OtherIcon
            break
        default:
            icon = 'unknown'
    }
    return (
        <button className={styles.button}>
            <Image src={icon} alt="filter icon" width={30} height={30} />
            <div>{filter}</div>
        </button>
    )
}

export default FilterIcon;
