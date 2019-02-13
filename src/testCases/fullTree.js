import React from 'react';

export default {
  id: 'root',
  data: () => (
    <div>
      <p>
        Root element
      </p>
    </div>
  ), 
  children: [
    {
      id: 'badger1',
      data: () => (
        <div>
          <p>
            Badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom1',
          data: () => (
            <div>
              <p>
                Mushroom
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake1',
              data: () => (
                <div>
                  <p>
                    A snake!
                  </p>
                </div>
              ),
            },
            {
              id: 'snake2',
              data: () => (
                <div>
                  <p>
                    A snake!
                  </p>
                </div>
              ),
            }
          ]
        }
      ]
    },
    {
      id: 'badger2',
      data: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger3',
      data: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger4',
      data: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom2',
          data: () => (
            <div>
              <p>
                mushroom!
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake3',
              data: () => (
                <div>
                  <p>
                    Oooooooo, it's a snake
                  </p>
                </div>
              ),
            }
          ]
        }
      ]
    }
  ]
}