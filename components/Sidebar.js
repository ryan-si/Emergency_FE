import Image from "next/image";
export default function Sidebar() {
  const iconpath = "Alert.png";

  return (
    <div>
      <div className="flex items-center">
        <div className="mr-2">
          {/* <img src={iconpath} alt="Icon" class="w-6 h-6" /> */}
          <Image
            className="w-6 h-6"
            src="/images/Alert.png" // 图像相对于/public目录的路径
            alt="Description of the image"
            width={300} // 图像的宽度
            height={300} // 图像的高度
          />
        </div>
        <div>文字内容</div>
      </div>
    </div>
  );
}
