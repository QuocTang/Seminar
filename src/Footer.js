import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;    
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
    
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

const ListItem = styled.li`
    width: 50%;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>RFID Solution</Logo>
            <Desc>
            RFID Solution là website thành viên thuộc Công ty Beetech - tiền thân là Công ty Cổ phần Đầu tư và Phát triển Công nghệ Huy Hoàng (Splendid) - là Công ty đầu tiên tại Việt Nam làm về RFID - chuyên tư vấn và cung cấp các giải pháp công nghệ (AIDC; IoT) hàng đầu tại Đông Nam Á.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>OUR COMPANY - OUR SUPPORT</Title>
            <List>
                <ListItem>RFID Solution</ListItem>
                <ListItem>Tầm nhìn, Sứ mệnh</ListItem>
                <ListItem>Giá trị cốt lõi</ListItem>
                <ListItem>Liên hệ</ListItem>
                <ListItem>RFID Solution</ListItem>
                <ListItem>Barcode Products</ListItem>
                <ListItem>Access Control Products</ListItem>
                <ListItem>RFID UHF Products</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight: "10px"}}/>
                7 Hoàng Minh Giám, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight: "10px"}}/>
                +84 98 468 96 69
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight: "10px"}}/>
                info@beetech.com.vn
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer