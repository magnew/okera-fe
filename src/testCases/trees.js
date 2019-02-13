import React from 'react';

export const tree1 = {
  id: 'root',
  renderer: () => (
    <div>
      <p>
        Badger Badger Tree
      </p>
    </div>
  ), 
  children: [
    {
      id: 'badger1',
      renderer: () => (
        <div>
          <p>
            Badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom1',
          renderer: () => (
            <div>
              <p>
                Mushroom
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake1',
              renderer: () => (
                <div>
                  <p>
                    A snake!
                  </p>
                </div>
              ),
            },
            {
              id: 'snake2',
              renderer: () => (
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
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger3',
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger4',
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom2',
          renderer: () => (
            <div>
              <p>
                mushroom!
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake3',
              renderer: () => (
                <div>
                  <p>
                    Oooooooo, its a snake
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

export const tree2 = {
  id: 'root',
  renderer: () => (
    <div>
      <p>
        Animal Tree
      </p>
    </div>
  ), 
  children: [
    {
      id: 'birds',
      renderer: () => (
        <div>
          <p>
            Birds
          </p>
        </div>
      ),
      children: [
        {
          id: 'eagles',
          renderer: () => (
            <div>
              <p>
                eagles
              </p>
            </div>
          ),
        },
        {
          id: 'penguins',
          renderer: () => (
            <div>
              <p>
                penguins
              </p>
            </div>
          ),
        },
      ]
    },
    {
      id: 'insects',
      renderer: () => (
        <div>
          <p>
            insects
          </p>
        </div>
      ),
      children: [
        {
          id: 'ants',
          renderer: () => (
            <div>
              <p>
                ants
              </p>
            </div>
          ),
        },
      ]
    },
    {
      id: 'fish',
      renderer: () => (
        <div>
          <p>
            fish
          </p>
        </div>
      ),
      children: [
        {
          id: 'salmon',
          renderer: () => (
            <div>
              <p>
                salmon
              </p>
            </div>
          ),
          children: [
            {
              id: 'king',
              renderer: () => (
                <div>
                  <p>
                    king
                  </p>
                </div>
              ),
            },
            {
              id: 'steelhead',
              renderer: () => (
                <div>
                  <p>
                    steelhead
                  </p>
                </div>
              ),
            },
            {
              id: 'atlantic',
              renderer: () => (
                <div>
                  <p>
                    atlantic
                  </p>
                </div>
              ),
            },
          ]
        },
      ]
    }
  ]
}