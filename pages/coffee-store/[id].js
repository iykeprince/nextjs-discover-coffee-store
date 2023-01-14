import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import coffeeStoreData from '../../coffee-stores.json'
import styles from '../../styles/coffee-store.module.css'
import cls from 'classnames'

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log('staticProps', staticProps);
  return {
    props: {
      coffeeStore: coffeeStoreData.find(coffeeStore => coffeeStore.id.toString() === params.id)
    }
  }
}

export async function getStaticPaths() {
  return {
    // paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    paths: coffeeStoreData.map(coffeeStore => ({ params: { id: coffeeStore.id.toString() } })),
    fallback: true
  }
}

const CoffeeStore = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const handleUpvoteButton = () => {
    console.log("up vote")
  }

  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;
  return <div className={styles.layout}>
    <Head>
      <title>{name}</title>
    </Head>
    <div className={styles.col1}>
      <div className={styles.backToHomeLink}>
        <Link href='/'>
          Back to home
        </Link>
      </div>


      <div className={styles.nameWrapper}>
        <p className={styles.name}>{name}</p>
      </div>
      <Image src={imgUrl} className={styles.storeImg} width={600} height={360} />
    </div>
    <div className={cls("glass", styles.col2)}>
      <div className={styles.iconWrapper}>
        <Image src="/static/icons/places.svg" width={24} height={24} />
        <p className={styles.text}>{address}</p>
      </div>
      <div className={styles.iconWrapper}>
        <Image src="/static/icons/nearMe.svg" width={24} height={24} />
        <p className={styles.text}>{neighbourhood}</p>
      </div>
      <div className={styles.iconWrapper}>
        <Image src="/static/icons/star.svg" width={24} height={24} />
        <p className={styles.text}>{2}</p>
      </div>

      <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!</button>

    </div>

  </div>
}
export default CoffeeStore;