import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Logo from './me.jpg'
import ProfileTabs from '../ProfileTabs/index'

const useStyle = makeStyles((theme: Theme)=>
    createStyles({
        header: {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url("https://media.giphy.com/media/l3vRbMRGhSmCxWj72/giphy.gif")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '300px',
        },
        img: {
            width: '100px',
            height: '100px',
            border: '2px solid aqua',
            borderRadius: '50%',
            padding: '10px'
        }
    
     })
     )

const Profile: React.FC = ()=>{
    const classes = useStyle()
    return(
        <div className="profile_section">
                <header className={classes.header}>
                    <div className="info_section" style={{padding: '15px' , color: '#fff',position: 'relative', top: '20px'}}>
                        <img src={Logo} alt="profiel picture" className={classes.img}/>
                        <Typography variant="h6" component="h6">
                            Mohammad Ahmad
                        </Typography>
                        <Button variant="contained" color="secondary" size="small" style={{position: 'relative', top: '10px'}}><i className="fas fa-cogs" style={{padding: '5px'}}></i> Edit Profile Settings</Button>
                    </div>
                </header>

                <div className="tabs_section" style={{position: 'relative', top: '40px'}}>
                    <ProfileTabs />
                </div>
        </div>
    )
}

export default Profile;