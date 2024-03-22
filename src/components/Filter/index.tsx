import styles from './Filter.module.css'
import Image from 'next/image'
import CatIcon from '../../../public/filter/caticon.svg'
import DogIcon from '../../../public/filter/dogicon.svg'
import OtherIcon from '../../../public/filter/othericon.svg'
import { useRouter } from 'next/router'

export enum Filter {
    Dog = "All Dogs",
    Cat = "All Cats",
    Other = "Other"
}

type FilterIconProps = {
    filter: Filter
}

const FilterIcon = ({ filter }: FilterIconProps) => {
    const router = useRouter();
    let icon: string;
    let path: string;

    switch (filter) {
        case Filter.Dog:
            icon = DogIcon
            path = '/dogs'
            break
        case Filter.Cat:
            icon = CatIcon
            path = '/cats'
            break
        case Filter.Other:
            icon = OtherIcon
            path = '/otherpets'
            break
        default:
            icon = 'unknown'
            path = '/'
    }
    return (
        <button className={styles.button} onClick={() => router.push(path)}>
            <Image src={icon} alt="filter icon" width={30} height={30} />
            <div>{filter}</div>
        </button>
    )
}

export default FilterIcon;
