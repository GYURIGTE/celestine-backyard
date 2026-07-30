import { Button } from "@/components/ui/button";

type CardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({ image, title, description, buttonLabel, buttonVariant = "primary" }: CardProps) {
  return (
    <div className="border border-green-200/80 rounded-lg p-6 bg-white hover:bg-gray-50 transition-colors">
      <img 
      src={image}
      alt= {title}
      className="w-full h-56 object-cover rounded-2xl"
      />
      <h1 className="text-xl font-semibold mb-2 mt-8 text-center">{title}</h1>
      <p className="text-gray-600 mb-4 text-justify mt-7">{description}</p>
      
      <div className="flex justify-center mt-8 mb-8">
      <Button variant={buttonVariant}>{buttonLabel}</Button>
       </div>

    </div>
  );
}