import classnames from 'classnames/bind'
import React, { memo } from 'react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import AboutImg from '@/assets/imgs/about.png'
import BgCaseImg from '@/assets/imgs/bg-case.jpg'
import logoIcon from '@/assets/imgs/logo.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { getAssetUrl } from '@/utils'

import styles from './index.module.css'
import './style.css'

const cx = classnames.bind(styles)

interface Props {}

const About = memo(() => {
  return (
    <div className={'h-screen w-screen bg-slate-50 relative flex flex-col'}>
      <div className={'ml-40 mt-40 mb-12 text-[#0095d7]'}>
        <h3 className={'font-semibold text-5xl'}>ABOUT US</h3>
        <p>关于臣蓝</p>
      </div>
      <img src={AboutImg} alt={'about'} className={'m-auto'} />
      <div className={'bg-[#68c0aa] mt-12 py-4 px-4 mx-20'}>
        <p>
          重庆臣蓝智能科技，秉持“重塑养殖场硬件生态”之宏愿，致力于人工智能与传统养殖深度融合，旨在激活潜在
          经济活力，加速农业养殖智能化、数据化转型。公司与国内农业院校紧密合作，于智能养殖领域荣获多项专利及国
          家级奖项。我们创新产品方案，突破传统设备局限，精准对接养殖需求，深度挖掘终端数据价值，开启养殖新纪
          元，共筑“猪场无界，智慧共享”的美好愿景。
        </p>
      </div>
    </div>
  )
})

const productList = [
  {
    name: '仔猪高效环境管理控制器（暖猪宝）',
    key: 'product-1',
  },
  {
    name: '智能网关',
    key: 'product-2',
  },
  {
    name: '猪场专用光源',
    key: 'product-3',
  },
  {
    name: '光照管理控制器',
    key: 'product-4',
  },
  {
    name: '疫苗专用回温器',
    key: 'product-5',
  },
  {
    name: '动物感应自动保定装置',
    key: 'product-6',
  },
  {
    name: '智能雾化消毒器',
    key: 'product-7',
  },
]

const Products = memo(() => {
  return (
    <div className={'min-h-screen w-screen bg-white relative flex flex-col'}>
      <div className={'ml-40 mt-40 mb-6 text-[#0095d7]'}>
        <h3 className={'font-semibold text-5xl'}>OUR PRODUCTS</h3>
        <p>我们的产品</p>
      </div>
      <div className={'flex px-40 w-full flex-wrap gap-y-8 gap-x-6 mb-6'}>
        {productList.map((item) => {
          const { name, key } = item
          return (
            <div
              key={key}
              className={
                'flex flex-col items-center text-[#68c0aa] p-2 border-solid border-2 rounded-2xl border-[#0095d7] w-[23%] h-auto hover:border-[#68c0aa] hover:cursor-pointer'
              }
            >
              <img
                alt={'product'}
                src={getAssetUrl(`products/${key}.jpg`)}
                className={'h-auto w-40'}
              />
              <div>
                <p className={'text-[1.5rem] text-center mt-2'}>{name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

const contactList = [
  {
    name: '微信公众号',
    key: 'wx-official-account',
  },
  {
    name: '微信视频号',
    key: 'wx-video-account',
  },
  {
    name: '抖音蓝V号',
    key: 'douyin-video-account',
  },
]

const Contact = memo(() => {
  return (
    <div className={'h-screen w-screen bg-slate-50 relative flex flex-col'}>
      <div className={'ml-40 mt-40 mb-12 text-[#0095d7]'}>
        <h3 className={'font-semibold text-5xl'}>CONTACT US</h3>
        <p>合作方式</p>
      </div>
      <div className={'mx-auto mt-4'}>
        <img alt={'chenlan'} className={'h-auto w-72'} src={logoIcon} />
      </div>
      <div className={'flex place-content-around text-gray-900 mt-16'}>
        {contactList.map((item) => {
          const { name, key } = item
          return (
            <div key={key} className={'flex flex-col items-center'}>
              <img
                alt={'contact'}
                className={'w-auto h-52'}
                src={getAssetUrl(`contacts/${key}.jpg`)}
              />
              <span>{name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
})

const caseList = [
  {
    name: '赶猪通道单向流通及精确计数系统解决方案',
  },
  {
    name: '环境温湿度远程远程智能监控与报警机制解决方案',
  },
  {
    name: '粪池高位预警及水池高低位报警系统解决方案',
  },
  {
    name: '水电表远程管理、控制及统计预警综合解决方案',
  },
  {
    name: 'A+B液体自动精准配比系统解决方案',
  },
  {
    name: '养殖场水塔动态加药自动化处理解决方案（含药水比例设定、处理水量确定及自动投药）',
  },
  {
    name: '料塔称重误差高精度校准技术解决方案',
  },
  {
    name: '脱温鹅自动孵化箱智能化管理解决方案',
  },
]

const Cases = memo(() => {
  return (
    <div className={'h-screen w-screen relative flex flex-col bg-white'}>
      <div className={'ml-40 mt-40 mb-12 text-[#0095d7]'}>
        <h3 className={'font-semibold text-5xl'}>PROFILE</h3>
        <p>定制项目案例</p>
      </div>
      <div className={'text-gray-900 z-10 ml-40'}>
        {caseList.map((item, index) => {
          const { name } = item
          return (
            <p
              key={index}
              className={'mt-4 hover:text-[#0095d7] hover:cursor-pointer'}
            >
              {index + 1}.{name}
            </p>
          )
        })}
      </div>
      <img
        alt={'bg-case'}
        src={BgCaseImg}
        className={'w-[40rem] absolute right-0 bottom-8'}
      />
    </div>
  )
})

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        className={cx('home-swiper')}
      >
        <SwiperSlide className={cx('swiper-1')}>
          <h3>猪厂无界&nbsp;智慧共享</h3>
        </SwiperSlide>
        <SwiperSlide className={cx('swiper-2')}>
          <h3>数造未来&nbsp;精益成长</h3>
        </SwiperSlide>
      </Swiper>
      <About />
      <Products />
      <Contact />
      <Cases />
    </>
  )
})
Index.displayName = 'Index'

export default Index
