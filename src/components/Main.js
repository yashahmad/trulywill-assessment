import {Row, Col, Button} from "react-bootstrap";
import group from "../assets/group.svg";
import righticon from "../assets/icons_arrow-left.svg";
import pencil from "../assets/pencil-create.svg";
import generalinfo from "../assets/general_info.svg";
import familyinfo from "../assets/family_info.svg";
import specific from "../assets/specific_distribution.svg";
import realestate from "../assets/real_estate_distribution.svg";
import representative from "../assets/representatives.svg";

export default function Main(){
    return (
        <div style={{background:'#f8f8f8'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'calc(100vh - 138px)'}}>
                <Row style={{background:'linear-gradient(92.25deg, #363C42 0%, #597591 100%)', boxShadow:'0px 4px 22px rgba(54, 60, 65, 0.06)', borderRadius:'8px',width:'60%'}}>
                    <p style={{color:'#FFFFFF',fontWeight:'500',fontSize:'40px',lineHeight:'48px',padding:'2rem 2rem'}}>Hey John, you're almost there</p>
                </Row>
                <Row style={{background:'#FFFFFF',borderRadius:'8px',width:'60%',borderLeft:'6px solid #86A150'}} className="mt-4">
                    <Col style={{paddingTop:'2rem'}}>
                        <Row style={{maxWidth:'300px',margin:'1rem auto'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                <img src={generalinfo} alt="GI" height="24px" width="24px"/>
                                <div>
                                    <p style={{fontWeight:'600',fontSize:'20px',marginBottom:'0px',color:'#86A150'}}>General Information</p>
                                    <p style={{fontWeight:'500',fontSize:'14px',marginBottom:'0px',color:'#86A150'}}>Completed</p>
                                </div>
                                <img src={pencil} alt="Edit" height="17px" width="17px"/>
                            </div>
                        </Row>
                        <Row style={{maxWidth:'300px',margin:'1rem auto'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                <img src={familyinfo} alt="GI" height="24px" width="24px"/>
                                <div>
                                    <p style={{fontWeight:'600',fontSize:'20px',marginBottom:'0px',color:'#86A150'}}>Family Information</p>
                                    <p style={{fontWeight:'500',fontSize:'14px',marginBottom:'0px',color:'#86A150'}}>Completed</p>
                                </div>
                                <img src={pencil} alt="Edit" height="17px" width="17px"/>
                            </div>
                        </Row>
                        <Row style={{maxWidth:'300px',margin:'1rem auto',background:'#86A150',borderRadius:'8px',padding:'0.5rem'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                <img src={specific} alt="GI" height="24px" width="24px"/>
                                <div>
                                    <p style={{fontWeight:'600',fontSize:'20px',marginBottom:'0px',color:'#FFF'}}>Specific Distribution</p>
                                    <p style={{fontWeight:'500',fontSize:'14px',marginBottom:'0px',color:'#FFF'}}>In Progress[4/12]</p>
                                </div>
                                <span></span>
                            </div>
                        </Row>
                        <Row style={{maxWidth:'300px',margin:'1rem auto'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                                <img src={realestate} alt="GI" height="24px" width="24px"/>
                                <div>
                                    <p style={{fontWeight:'600',fontSize:'20px',marginBottom:'0px',color:'#597591',marginLeft:'1rem'}}>Residual Estate Distribution</p>
                                </div>
                                <span></span>
                            </div>
                        </Row>
                        <Row style={{maxWidth:'300px',margin:'1rem auto'}}>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
                                <img src={representative} alt="GI" height="24px" width="24px"/>
                                <div>
                                    <p style={{fontWeight:'600',fontSize:'20px',marginBottom:'0px',color:'#597591',marginLeft:'1rem'}}>Representatives</p>
                                </div>
                                <span></span>
                            </div>
                        </Row>
                    </Col>
                    <Col style={{minHeight:'460px',display:'flex',flexDirection:'column',justifyContent:'center',paddingRight:'1rem'}}>
                        <h1>Specific Distribution</h1>
                        <Row className="mt-5">
                            <Col md={2} style={{marginRight:'1rem'}}>
                                <img src={group} alt="Group"/>
                            </Col>
                            <Col>
                                <p style={{fontSize:'24px',fontWeight:'500',marginBottom:'0px'}}>Lorem ipsum dolor</p>
                                <p style={{color: '#597591',fontSize:'1rem'}}>Specify gifts to the ones you wish</p>
                            </Col>
                        </Row>
                        <Button className="mt-5" style={{background: '#3484F0',borderRadius:'6px',color:'#FFFFFF',fontWeight:'700',fontSize:'1rem',padding:'0.5rem 1rem',width:'154px'}}>Continue <img src={righticon} alt="->" style={{paddingLeft:'4px'}}/></Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}