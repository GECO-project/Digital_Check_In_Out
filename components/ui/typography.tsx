export function TypographyH1({ text }: { text: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
      {text}
    </h1>
  );
}

export function TypographyH2({ text }: { text: string }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}

export function TypographyH3({ text }: { text: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}

export function TypographyH4({ text }: { text: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}

export function TypographyP({ text }: { text: string }) {
  return <p className="leading-7">{text}</p>;
}
