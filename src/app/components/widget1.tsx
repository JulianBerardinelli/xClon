import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Widget1() {
  return (
    <Card className="max-w-[400px] bg-black/0 border border-white/20 px-12">
      <CardHeader className="flex gap-3">
        <a target="_blank" href="https://www.julianberardinelli.com/">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="./logo.png"
            width={40}
          />
        </a>
        <div className="flex flex-col">
          <a target="_blank" href="https://www.julianberardinelli.com/">
            <p className="text-md">Julián Berardinelli</p>
            <p className="text-small text-default-500">Full-Stack Developer</p>
          </a>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          target="_blank"
          href="https://github.com/JulianBerardinelli/xClon"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
