import Card from 'react-bootstrap/Card';
import { TbDroplet, TbBrandGithub } from 'react-icons/tb';

function Footer() {
    return (
        <div> 
        <footer  className='text-center mb-5'>
        <Card.Text>
            kullanılan hizmetlerin linkleri aşağıda verilmiştir.
        </Card.Text>
            <Card.Link href="https://eksisozluk.com"><TbDroplet className='text-success'/> Ekşi Sözlük</Card.Link>
            --
            <Card.Link href="https://eksisozluk-api.herokuapp.com/doc/"><TbDroplet className='text-success'/> Unofficial eksisozluk.com API</Card.Link> 
            --
            <Card.Link href="#"><TbBrandGithub/> Github Repo Kaynak Kodlar</Card.Link>

        </footer>

        </div>

    );
}

export default Footer;