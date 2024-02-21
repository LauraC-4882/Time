import {Image,Card, CardHeader, CardBody} from "@nextui-org/react";

let Information = () =>{
    return(
        <div class="Aboutmid" style={{display:"flex", flexDirection:"column"}}>
      <h3>our services</h3>
      <h1>What we offer</h1>
      <h4>Some little comments</h4>
      <div class="cards" style={{display:"flex", flexDirection:"row"}}>
        <div class="firstcard">
      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Write a letter to yourself</p>
        <small className="text-default-500">benefit</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
    <div class="secondcard">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Share daily feelings and concerns with others</p>
        <small className="text-default-500">benefit</small>
        <h4 className="font-bold text-large">Comment and agree with others to enjoy nice conversations</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
    <div class="thirdcard">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Comment and agree with others to enjoy nice conversations</p>
        <small className="text-default-500">benefit</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
    <div class="fourthcard">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Comment and agree with others to enjoy nice conversations</p>
        <small className="text-default-500">benefit</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
    </div>
    </div>
    )
}
export default Information;