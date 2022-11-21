import { PropsWithChildren } from "react";

type FadeInProps = {
  /** applies to the animation-delay attribute */
  delay: number;
};
export default function FadeInText({
  delay,
  children,
}: PropsWithChildren<FadeInProps>) {
  const classList = `opacity-0 [animation-delay:${delay}s] [animation-fill-mode:forwards] animate-fade-in`;
  return <p className={classList}>{children}</p>;
}
