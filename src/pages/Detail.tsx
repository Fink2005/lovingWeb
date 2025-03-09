import { ScratchToReveal } from '../components/magicui/scratch-to-reveal'
import HeroVideoDialog from '../components/magicui/hero-video-dialog'
import ScrollTriggered from '../components/ScrollTriggered'
import { ConfettiFireworks } from '../components/FireWorks'
import { MorphingText } from '../components/magicui/morphing-text'
import { TextReveal } from '../components/magicui/text-reveal'
import { ChevronDown } from 'lucide-react'
import { Particles } from '../components/magicui/particles'
import LovingDraw from '../components/lottieFiles/LovingDraw'
import { SparklesText } from '../components/magicui/sparkles-text'
import { SpinningText } from '../components/magicui/spinning-text'
import { useState } from 'react'
const texts = [
    "Kỉ niệm",
    "của",
    "chúng ta",
    "sẽ được",
    "lưu giữ",
    "mãi mãi",
  ];

const Detail = () => {
    const [isDisplaySpinner, setisDisplaySpinner] = useState<boolean>(true);
  return (
 <div className="py-16 bg-[#C7D9DD] overflow-x-visible" >
    <Particles
        className="fixed inset-0 z-50"
        quantity={100}
        ease={80}
        color={"blue"}
        refresh
      />
  <div className='flex flex-col items-center space-y-6 md:space-y-10'>
  <MorphingText className='text-[#495F88]' texts={texts} />
    <ConfettiFireworks/>
    <ChevronDown className="w-10 h-10 text-gray-600 animate-bounce-custom" />
  <LovingDraw/>
  </div>

  <TextReveal className='text-center '>
    3 năm là quãng đường ta đã dành cho nhau, hãy xem lại những gì chúng ta đã qua em nhé!
  </TextReveal>
    <ScrollTriggered/>
      <div className="flex justify-center top-0">
   <HeroVideoDialog
     animationStyle="from-center"
     videoSrc="/assets/syandnhidethuong.mp4"
     thumbnailSrc="/assets/syandnhi.jpg"
     thumbnailAlt="I Love U"
   />
 </div>
 <div className='relative overflow-x-hidden'>
{isDisplaySpinner && <SpinningText className='absolute top-32 right-8 z-50 block sm:hidden'>learn more • earn more • grow more •</SpinningText>}
 <SparklesText className='my-3 mt-5 text-center text-[#495F88]' text="Chà để hiển thị" />;
     <div className="flex items-center justify-center">
     <ScratchToReveal
     onComplete={() => setisDisplaySpinner(false)}
     width={400}
     height={420}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 w-auto h-auto"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <p className="text-sm leading-8 p-1">Anh biết rằng dạo gần đây em đã phải trải qua rất nhiều áp lực và mệt mỏi. Anh có thể không hiểu hết những gì em đang đối mặt, nhưng anh luôn ở đây, bên cạnh em, sẵn sàng lắng nghe và chia sẻ cùng em bất cứ lúc nào. Em không cần phải mạnh mẽ một mình, vì em luôn có anh.
Cảm ơn em vì đã luôn cố gắng, đã luôn dịu dàng và kiên cường dù có lúc mọi thứ chẳng dễ dàng chút nào. Anh thật sự trân trọng tất cả những gì em làm, cả những nỗ lực mà đôi khi em chẳng nói ra. Đối với anh, em không cần phải hoàn hảo, chỉ cần em là chính mình – người con gái anh yêu thương nhất.
Dù hôm nay có thế nào, anh mong em hãy nhớ rằng ngày mai vẫn còn nhiều điều tốt đẹp đang chờ đón. Anh tin ở em, tin rằng em sẽ vượt qua tất cả và ngày càng mạnh mẽ hơn. Và quan trọng nhất, dù bất cứ chuyện gì xảy ra, anh vẫn luôn nắm chặt tay em.
</p>
    </ScratchToReveal>
  </div>
 </div>
 
 </div>
  )
}

export default Detail
