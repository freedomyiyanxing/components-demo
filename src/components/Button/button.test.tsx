import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

const defaultProps = {
  onClick: jest.fn()
};

describe('button test', () => {
  it('测试默认button组件', () => {
    const wrapper = render(<Button>Hello</Button>);
    const element = wrapper.getByText('Hello');
    // 断言是否存在当前元素
    expect(element).toBeInTheDocument();
    // 断言是否相等
    expect(element.tagName).toEqual('BUTTON');
    // 是否有class
    expect(element).toHaveClass('btn btn-default');
    // 模拟点击
    fireEvent.click(element);
    // 检查函数是否被执行
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('测试 primary button 组件', () => {
    const wrapper = render(<Button btnType="primary">primary</Button>);
    const element = wrapper.getByText('primary');
    // 断言是否存在当前元素
    expect(element).toBeInTheDocument();
    // 是否有class
    expect(element).toHaveClass('btn btn-primary');
  });

  it('测试 link button 组件', () => {
    const wrapper = render(<Button btnType="link" href="https://www.bomman.com">link</Button>);
    const element = wrapper.getByText('link');
    // 断言是否存在当前元素
    expect(element).toBeInTheDocument();
    // 断言是否相等
    expect(element.tagName).toEqual('A');
    // 是否有class
    expect(element).toHaveClass('btn btn-link');
  })
});
