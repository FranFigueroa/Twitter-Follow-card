import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

const user = [
    {
        userName: 'user1',
        name:'George Hotz',
        isFollowing: true
    },
    
    {
        userName: 'user2',
        name:'Linus Torvalds',
        isFollowing: false
    },

    {
        userName: 'user3',
        name:'Dennis Ritchie',
        isFollowing: true
    },

    {
        userName: 'user4',
        name:'Tsolving',
        isFollowing: true
    }
]

export function App(){
    return (
        <section className='App'>
            {
                useSyncExternalStore.map(({userName, name, isFollowing}) =>(
                    <TwitterFollowCard
                        key = {userName}
                        userName = {UserName}
                        initialIsFollowing = {isFollowing}
                    >
                        {name}
        </TwitterFollowCard>
                ))
            }
        </section>
    )
}