type TitleProps = {
  str: string;
};

export default function Title({ str }: TitleProps) {
  return (
    <div class="pt-2">
      <p class="font-josefinsans font-bold text-2xl text-[#2d2d2d]">{str}</p>
    </div>
  );
}
