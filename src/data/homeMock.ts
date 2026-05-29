import main1 from '@/assets/images/home/main-1.png'
import main2 from '@/assets/images/home/main-2.png'
import main3 from '@/assets/images/home/main-3.png'
import main4 from '@/assets/images/home/main-4.png'

export type HeroSlide = {
  id: string
  image: string
  title: string
  hashtags: string
}

export type HeritageCard = {
  id: string
  image: string
  distance: string
  location: string
  title: string
  siteName: string
}

export type StoryPlace = {
  id: string
  image: string
  category: string
  title: string
  hashtags: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: main1,
    title: '가장 찬란했던 조선의 하루로 당신을 초대합니다',
    hashtags: '#조선의법궁 #필수코스 #도보2km',
  },
  {
    id: 'slide-2',
    image: main2,
    title: '밤이 내린 궁궐, 다른 차원의 아름다움',
    hashtags: '#야간개장 #경복궁 #조명투어',
  },
  {
    id: 'slide-3',
    image: main3,
    title: '역사가 숨 쉬는 골목, 걸으며 만나는 이야기',
    hashtags: '#한옥마을 #전통문화 #도보코스',
  },
  {
    id: 'slide-4',
    image: main4,
    title: '사찰의 고요함 속에서 찾는 마음의 쉼',
    hashtags: '#사찰 #명상 #힐링',
  },
]

export const nearbyHeritageCards: HeritageCard[] = [
  {
    id: 'heritage-1',
    image: main1,
    distance: '500m',
    location: '서울 종로구 사직동',
    title: '조선 왕조의 제일 법궁',
    siteName: '경복궁',
  },
  {
    id: 'heritage-2',
    image: main2,
    distance: '1.2km',
    location: '서울 종로구 와룡동',
    title: '왕실의 제사를 지내는 곳',
    siteName: '종묘',
  },
  {
    id: 'heritage-3',
    image: main3,
    distance: '2.1km',
    location: '서울 종로구 계동',
    title: '전통과 현대가 어우러진 마을',
    siteName: '북촌한옥마을',
  },
  {
    id: 'heritage-4',
    image: main4,
    distance: '3.5km',
    location: '서울 종로구 견지동',
    title: '대한민국 대표 사찰',
    siteName: '조계사',
  },
]

export const storyPlaces: StoryPlace[] = [
  {
    id: 'story-1',
    image: main1,
    category: '궁궐',
    title: '근정전 앞 광장에서 펼쳐지는 조선 왕실의 위엄',
    hashtags: '#근정전 #야간개장 #왕실',
  },
  {
    id: 'story-2',
    image: main2,
    category: '사찰',
    title: '연등이 밝히는 조계사의 고요한 밤',
    hashtags: '#연등회 #명상 #힐링',
  },
  {
    id: 'story-3',
    image: main3,
    category: '마을',
    title: '한옥 골목길을 걸으며 만나는 옛 이야기',
    hashtags: '#한옥 #골목투어 #전통',
  },
  {
    id: 'story-4',
    image: main4,
    category: '궁궐',
    title: '경회루 연못에 비친 달빛의 환상',
    hashtags: '#경회루 #야경 #포토스팟',
  },
  {
    id: 'story-5',
    image: main1,
    category: '유적',
    title: '세종대왕이 남긴 과학과 문화의 유산',
    hashtags: '#세종 #한글 #과학',
  },
]
