import { Post } from '../models/post/Post';

export const POSTS_DATA: Post = {
  success: true,
  total: 10,
  data: [
    {
      id: 'post1',
      title: 'Post 1 title',
      image:
        'https://images.pexels.com/photos/227507/pexels-photo-227507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 1 body content This is the post 1 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: {
        username: 'user1',
        name: 'User 1',
        job: 'Designer',
      },
      comments: [
        {
          id: 'comment1',
          author: {
            username: 'user2',
            name: 'User 2',
            job: 'Developer',
          },
          comment:
            'This is the comment 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 'comment2',
          author: {
            username: 'user3',
            name: 'User 3',
            job: 'Manager',
          },
          comment:
            'This is the comment 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    {
      id: 'post2',
      title: 'Post 2 title',
      image:
        'https://images.pexels.com/photos/51121/ladybird-flower-nature-ladybug-51121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 2 body content This is the post 2 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user2',
        name: 'User 2',
        job: 'Developer',
      },
      comments: [],
    },
    {
      id: 'post3',
      title: 'Post 3 title',
      image:
        'https://images.pexels.com/photos/64705/frozen-berries-red-fruits-64705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 3 body content This is the post 3 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user1',
        name: 'User 1',
        job: 'Designer',
      },
      comments: [
        {
          id: 'comment3',
          author: {
            username: 'user2',
            name: 'User 2',
            job: 'Developer',
          },
          comment:
            'This is the comment 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 'post4',
      title: 'Post 4 title',
      image:
        'https://images.pexels.com/photos/303532/pexels-photo-303532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 4 body content This is the post 4 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user3',
        name: 'User 3',
        job: 'Manager',
      },
      comments: [
        {
          id: 'comment4',
          author: {
            username: 'user1',
            name: 'User 1',
            job: 'Designer',
          },
          comment:
            'This is the comment 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment5',
          author: {
            username: 'user2',
            name: 'User 2',
            job: 'Developer',
          },
          comment:
            'This is the comment 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 'post5',
      title: 'Post 5 title',
      image:
        'https://images.pexels.com/photos/163912/pexels-photo-163912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 5 body content This is the post 5 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user3',
        name: 'User 3',
        job: 'SEO',
      },
      comments: [
        {
          id: 'comment6',
          author: {
            username: 'user1',
            name: 'User 1',
            job: 'Designer',
          },
          comment:
            'Serious? No one commented on this thing (This is the comment 6).',
        },
      ],
    },
    {
      id: 'post6',
      title: 'Post 6 title',
      image:
        'https://images.pexels.com/photos/257352/pexels-photo-257352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 6 body content This is the post 6 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user4',
        name: 'User 4',
        job: 'Tester',
      },
      comments: [
        {
          id: 'comment7',
          author: {
            username: 'user5',
            name: 'User 5',
            job: 'Designer',
          },
          comment:
            'This is the comment 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment8',
          author: {
            username: 'user3',
            name: 'User 3',
            job: 'SEO',
          },
          comment:
            'This is the comment 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 'post7',
      title: 'Post 7 title',
      image:
        'https://images.pexels.com/photos/273809/pexels-photo-273809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 7 body content This is the post 7 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user5',
        name: 'User 5',
        job: 'Designer',
      },
      comments: [
        {
          id: 'comment9',
          author: {
            username: 'user4',
            name: 'User 4',
            job: 'Tester',
          },
          comment:
            'This is the comment 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
    {
      id: 'post8',
      title: 'Post 8 title',
      image:
        'https://images.pexels.com/photos/122970/pexels-photo-122970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'This is the post 8 body content This is the post 8 body content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        username: 'user1',
        name: 'User 1',
        job: 'Designer',
      },
      comments: [
        {
          id: 'comment10',
          author: {
            username: 'user3',
            name: 'User 3',
            job: 'SEO',
          },
          comment:
            'This is the comment 10 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment11',
          author: {
            username: 'user2',
            name: 'User 2',
            job: 'Developer',
          },
          comment:
            'This is the comment 11 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment12',
          author: {
            username: 'user4',
            name: 'User 4',
            job: 'Tester',
          },
          comment:
            'This is the comment 12 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment13',
          author: {
            username: 'user5',
            name: 'User 5',
            job: 'Designer',
          },
          comment:
            'This is the comment 13 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment14',
          author: {
            username: 'user1',
            name: 'User 1',
            job: 'Designer',
          },
          comment:
            'This is the comment 14 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 'comment15',
          author: {
            username: 'user6',
            name: 'User 6',
            job: 'Zombie',
          },
          comment:
            'This is the comment 15 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
  ],
};
