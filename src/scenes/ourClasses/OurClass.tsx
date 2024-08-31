import { ClassType } from "@/shared/types";

type Props = ClassType & {};

const OurClass = ({ image, name, description }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="overlay">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default OurClass;
